import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationGalleryComponent } from './organization-gallery.component';

const routes: Routes = [
  { path: '', component: OrganizationGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationGalleryRoutingModule { }
