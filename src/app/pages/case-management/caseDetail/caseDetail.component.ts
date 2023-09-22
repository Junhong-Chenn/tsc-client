import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-caseDetail',
  templateUrl: './caseDetail.component.html',
  styleUrls: ['./caseDetail.component.scss']
})
export class CaseDetailComponent implements OnInit {

  caseDetailForm!: FormGroup
  @Input() serviceData: any;
  @Input() caseDetail: any;
  @Output() closeDetail = new EventEmitter()
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.caseDetailForm = this.fb.group({
      name: null,
      dateOfBirth: null,
      conditionSummary: null,
      email: null,
      cabinNumber: null,
      contactNumber: null,
      gender: null,
      moveInDate: null,
      developGoal: null
    });
    this.initForm()
  }

  initForm() {
    if (this.caseDetail) {
      this.caseDetailForm.patchValue({
        name: this.caseDetail.name,
        dateOfBirth: this.caseDetail.dateOfBirth,
        conditionSummary: this.caseDetail.conditionSummary,
        email: this.caseDetail.email,
        cabinNumber: this.caseDetail.cabinNumber,
        contactNumber: this.caseDetail.contactNumber,
        gender: this.caseDetail.gender,
        moveInDate: this.caseDetail.moveInDate,
        developGoal: this.caseDetail.developGoal
      })
    }
  }

  close() {
    this.closeDetail.emit()
  }

  save() {
    console.log('------',this.caseDetailForm)
  }

  reset() {
    this.caseDetailForm.patchValue({
      name: null,
      dateOfBirth: null,
      conditionSummary: null,
      email: null,
      cabinNumber: null,
      contactNumber: null,
      gender: null,
      moveInDate: null,
      developGoal: null
    })
  }
}
