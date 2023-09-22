import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CaseManagementService } from 'src/app/services/case-management.service';

@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CaseManagementComponent implements OnInit {
  radioValue = '1';
  listOfBeneficiary: any[] = [];
  caseType = [
    {
      key: '1',
      value: 'Open Case'
    },
    {
      key: '2',
      value: 'Closed Case'
    }
  ];
  showDetail = false;
  serviceData: any;
  caseDetail = null;
  constructor(
    private caseManagementService: CaseManagementService
  ) { }

  ngOnInit(): void {
    this.getServiceData();
    this.getBeneficiaryData();
  }

  onCaseTypeChange(event: any) {

  }

  openDetail() {
    this.showDetail = true;
  }

  getServiceData() {
    this.caseManagementService.getServiceData().subscribe(res => {
      console.log('res',res)
      this.serviceData = res;
    })
  }

  closeDetail() {
    this.showDetail = false;
  }

  getBeneficiaryData() {
    this.caseManagementService.getBeneficiaryData().subscribe((res :any) => {
      this.listOfBeneficiary = res.beneficiaries
    })
  }

  edit(item: any) {
    this.caseDetail = item;
    this.showDetail = true;
    console.log('item',item)
  }
}
