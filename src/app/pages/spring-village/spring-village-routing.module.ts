import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpringVillageComponent } from './spring-village.component';

const routes: Routes = [
  { path: '', component: SpringVillageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpringVillageRoutingModule { }
