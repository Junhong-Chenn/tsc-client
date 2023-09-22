import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/authentication/login/login.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/statistics' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'spring-village', loadChildren: () => import('./pages/spring-village/spring-village.module')
      .then(m => m.SpringVillageModule) },
  { path: 'case-management', loadChildren: () => import('./pages/case-management/case-management.module')
      .then(m => m.CaseManagementModule) },
  { path: 'organization-gallery', loadChildren: () => import('./pages/organization-gallery/organization-gallery.module')
      .then(m => m.OrganizationGalleryModule) },
  { path: 'statistics', loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule) },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
