import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ServiceTypeMapping, ServiceTypes, SpringVillageType, SpringVillageTypes, TableData } from "../spring-village.types";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { SpringVillageService } from "../../../services/spring-village.service";

@Component({
  selector: 'app-navigators',
  templateUrl: './navigators.component.html',
  styleUrls: ['./navigators.component.scss']
})
export class NavigatorsComponent implements OnInit {
  fieldType: SpringVillageType = SpringVillageTypes.Beneficiary;

  total = 1;
  listData: TableData[] = [];
  loading = true;
  pageSize = 25;
  pageIndex = 1;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];
  cachedQueryParams: NzTableQueryParams = {
    pageIndex: this.pageIndex,
    pageSize: this.pageSize,
    sort: [],
    filter: [],
  };

  searchValue = '';
  visible = false;
  @Input() contentTemplate!: TemplateRef<any>;
  constructor(
    public springVillageService: SpringVillageService,
  ) { }

  ngOnInit(): void {
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    const filterNameKey = this.cachedQueryParams?.filter?.find(item => item.key === 'name');
    if (filterNameKey) {
      filterNameKey.value = [this.searchValue];
    } else {
      this.cachedQueryParams?.filter?.push({ key: 'name', value: [this.searchValue] });
    }
    this.springVillageService.onQueryParamsChange(this.cachedQueryParams as NzTableQueryParams, this);
  }

}
