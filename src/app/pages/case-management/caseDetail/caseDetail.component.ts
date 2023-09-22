import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { CaseManagementService } from 'src/app/services/case-management.service';

@Component({
  selector: 'app-caseDetail',
  templateUrl: './caseDetail.component.html',
  styleUrls: ['./caseDetail.component.scss']
})
export class CaseDetailComponent implements OnInit {

  caseDetailForm!: FormGroup
  journalData: any;
  inputValue: string = '';
  submitting = false;
  @Input() serviceData: any;
  @Input() caseDetail: any;
  @Output() closeDetail = new EventEmitter()
  constructor(
    private fb: FormBuilder,
    private caseManagementService: CaseManagementService
  ) { }

  ngOnInit() {
    this.caseDetailForm = this.fb.group({
      name: null,
      dateOfBirth: null,
      conditionSummary: null,
      email: null,
      contactNumber: null,
      gender: null,
      moveInDate: null,
      developGoal: null,
      substanceUseHistory: null,
      substanceCategory: null,
      substanceActiveUse: null
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
        contactNumber: this.caseDetail.contactNumber,
        gender: this.caseDetail.gender,
        moveInDate: this.caseDetail.moveInDate,
        developGoal: this.caseDetail.developGoal,
        substanceUseHistory: this.caseDetail?.substanceUseHistory,
        substanceCategory: this.caseDetail?.substanceCategory,
        substanceActiveUse: this.caseDetail?.substanceActiveUse
      })
      this.getJournalData();
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
      contactNumber: null,
      gender: null,
      moveInDate: null,
      developGoal: null,
      substanceUseHistory: null,
      substanceCategory: null,
      substanceActiveUse: null
    })
  }

  getJournalData() {
    this.caseManagementService.getJournalData().subscribe((res: any) =>{
      this.journalData = res
    })
  }
  
  getCurrentTime() {
    var date = new Date()
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
        var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
        return Y+M+D+h+m+s;
  }

  handleSubmit() {
    this.journalData.activity.push({
      time: this.getCurrentTime(),
      operator: "Julie, Warren",
      note: this.inputValue
    })
  }
}
