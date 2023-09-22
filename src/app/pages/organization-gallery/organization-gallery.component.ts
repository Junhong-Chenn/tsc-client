import { Component, OnInit } from '@angular/core';
import { OrganizationGalleryService } from "../../services/organization-gallery.service"

@Component({
  selector: 'app-organization-gallery',
  templateUrl: './organization-gallery.component.html',
  styleUrls: ['./organization-gallery.component.scss']
})
export class OrganizationGalleryComponent implements OnInit {
  orgArray: any[] = [];
  orgDetail = null;
  constructor(
    private organizationGalleryService: OrganizationGalleryService
  ) { }

  ngOnInit(): void {
    this.organizationGalleryService.getOrgDate().subscribe((res: any) =>{
      this.orgArray = res.organizations
      this.orgArray.forEach((el: any) => {
          el.image = `url('../../../../src/assets/images/${el.name}.png')`
          // el.image = `../../../../src/assets/images/${el.name}.png`
        })
      console.log('*****',res.organizations)
      console.log('his.orgArray',this.orgArray)
    })
  }

  getOrgDetail(org: any) {
    this.orgDetail = org;
  }

  close(event: any) {
    this.orgDetail = null;
  }
}
