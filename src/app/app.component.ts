import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  breadcrumbData: any[] = [];
  user = 'User';
  color = '#f56a00';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  updateBreadcrumbs() {
    this.breadcrumbData = [];

    let route = this.activatedRoute;
    console.log('route', route);

    const currentRoute = this.activatedRoute.snapshot.routeConfig?.path;
    console.log('Current Route:', currentRoute);
    while (route) {
      const routeData = route.snapshot.data;
      console.log('routeData', routeData);
      if (routeData && routeData.breadcrumb) {
        this.breadcrumbData.unshift({
          label: routeData.breadcrumb,
          url: route.snapshot.url.join('/'),
        });
      }
      route = route.firstChild as ActivatedRoute;
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.activatedRoute.snapshot.routeConfig?.path;
        console.log('Current Route:', currentRoute);
        this.updateBreadcrumbs();
      }
    });
  }
}
