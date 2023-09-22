import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { SpringVillageRoutingModule } from "./spring-village-routing.module";
import { SpringVillageComponent } from './spring-village.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { NzTagModule } from "ng-zorro-antd/tag";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import { NavigatorsComponent } from './navigators/navigators.component';
import { CabinsComponent } from './cabins/cabins.component';
import { ServiceComponent } from './service/service.component';
import { TestComponent } from './test/test.component';
import { CaseManagementModule } from "../case-management/case-management.module";



@NgModule({
  declarations: [
    SpringVillageComponent,
    BeneficiaryComponent,
    NavigatorsComponent,
    CabinsComponent,
    ServiceComponent,
    TestComponent
  ],
    imports: [
        CommonModule,
        SpringVillageRoutingModule,
        NzRadioModule,
        FormsModule,
        NzTableModule,
        NzIconModule,
        NzDropDownModule,
        NzMenuModule,
        NzButtonModule,
        NzInputModule,
        NzTagModule,
        NzToolTipModule,
        NzPopoverModule,
        CaseManagementModule,
    ],
  exports: [
    SpringVillageComponent
  ]
})
export class SpringVillageModule { }
