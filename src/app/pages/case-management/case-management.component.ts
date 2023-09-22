import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CaseManagementService } from 'src/app/services/case-management.service';

@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CaseManagementComponent implements OnInit {
  radioValue = 'Actived';
  listOfBeneficiary: any[] = [];
  caseType = [
    {
      key: 'Actived',
      value: 'Actived Case'
    },
    {
      key: 'Closed',
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
    this.radioValue = event;
    this.getBeneficiaryData();
  }

  openDetail() {
    this.caseDetail = null;
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

  saveDetail(event: any) {
    console.log('event',event);
    this.listOfBeneficiary.push(event);
  }

  getBeneficiaryData() {
    this.caseManagementService.getBeneficiaryData().subscribe((res :any) => {
      if (this.radioValue == 'Actived') {
        this.listOfBeneficiary = res.beneficiaries.filter((el: any) => { return !el.caseClosure})
      } else {
        this.listOfBeneficiary = res.beneficiaries.filter((el: any) => { return el.caseClosure})
      }
    })
  }

  edit(item: any) {
    this.caseDetail = item;
    this.showDetail = true;
  }
}
