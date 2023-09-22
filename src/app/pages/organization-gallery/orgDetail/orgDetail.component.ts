import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-orgDetail',
  templateUrl: './orgDetail.component.html',
  styleUrls: ['./orgDetail.component.scss']
})
export class OrgDetailComponent implements OnInit {
  @Input() orgDetail: any;
  @Output() toBack = new EventEmitter();
  constructor() { }

  ngOnInit() {
    document.getElementById('link')?.setAttribute("href", this.orgDetail.link)
  }
  
  goBack() {
    this.toBack.emit({})
  }
}
