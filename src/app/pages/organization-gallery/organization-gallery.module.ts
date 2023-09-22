import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationGalleryRoutingModule } from './organization-gallery-routing.module';
import { OrganizationGalleryComponent } from './organization-gallery.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { OrgDetailComponent } from './orgDetail/orgDetail.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';


@NgModule({
  declarations: [
    OrganizationGalleryComponent,
    OrgDetailComponent
  ],
  imports: [
    CommonModule,
    OrganizationGalleryRoutingModule,
    NzCarouselModule,
    NzButtonModule,
    NzCollapseModule
  ]
})
export class OrganizationGalleryModule { }
