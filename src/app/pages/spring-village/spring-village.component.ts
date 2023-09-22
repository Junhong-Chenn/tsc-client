import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { SpringVillageType, SpringVillageTypes, TableData} from "./spring-village.types";
import { SpringVillageService } from "../../services/spring-village.service";
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { BeneficiaryComponent } from "./beneficiary/beneficiary.component";
import { NavigatorsComponent } from './navigators/navigators.component';
import { CabinsComponent } from "./cabins/cabins.component";
import { ServiceComponent } from "./service/service.component";
import { TestComponent } from "./test/test.component";

export const SpringVillageComponents = {
  [SpringVillageTypes.Beneficiary]: BeneficiaryComponent,
  [SpringVillageTypes.Navigators]: NavigatorsComponent,
  [SpringVillageTypes.Cabins]: CabinsComponent,
  [SpringVillageTypes.Services]: ServiceComponent,
  [SpringVillageTypes.Test]: TestComponent,
}

@Component({
  selector: 'app-spring-village',
  templateUrl: './spring-village.component.html',
  styleUrls: ['./spring-village.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpringVillageComponent implements OnInit {
  fieldType: SpringVillageType = SpringVillageTypes.Beneficiary;
  springVillageTypes = Object.keys(SpringVillageTypes);

  total = 1;
  listData: TableData[] = [];
  loading = true;
  pageSize = 2;
  pageIndex = 1;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];
  cachedQueryParams: NzTableQueryParams | null = null;

  searchValue = '';
  visible = false;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;


  constructor(
    private springVillageService: SpringVillageService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.onSpringVillageTypeChange(this.fieldType);
    });
  }

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.springVillageService.getUsers(
      pageIndex, pageSize, sortField, sortOrder, filter, this.fieldType
    ).subscribe(data => {
      console.log('data', data);
      this.loading = false;
      this.total = 200; // mock the total data here
      this.listData = data.results;
      // this.listData = data;
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log('params', params);
    this.cachedQueryParams = params;
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  onSpringVillageTypeChange(event: SpringVillageType) {
    console.log('event', event);
    this.fieldType = event;
    // this.onQueryParamsChange(this.cachedQueryParams as NzTableQueryParams);
    this.loadComponent();
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
    this.onQueryParamsChange(this.cachedQueryParams as NzTableQueryParams);
  }

  loadComponent() {
    this.unloadComponent();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpringVillageComponents?.[this.fieldType]);
    const componentRef = componentFactory.create(this.dynamicComponentContainer.injector);
    this.dynamicComponentContainer.insert(componentRef.hostView);
    const instance = componentRef.instance as BeneficiaryComponent;
    console.log('instance', instance);
    instance.fieldType = this.fieldType;
    if (instance.cachedQueryParams) {
      instance.springVillageService.onQueryParamsChange(instance.cachedQueryParams, instance.cachedQueryParams);
    }
  }

  unloadComponent() {
    this.dynamicComponentContainer.clear();
  }

}
