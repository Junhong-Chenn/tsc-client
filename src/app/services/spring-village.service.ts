import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { API_BASE_URL } from "../settings/project-setting";
import {EMPTY, Observable, of} from "rxjs";
import { TableData, SpringVillageType, SpringVillageTypes } from '../pages/spring-village/spring-village.types';
import { catchError } from "rxjs/operators";
import { MockData } from "../pages/spring-village/mock-data";
import { NzTableQueryParams } from "ng-zorro-antd/table";

@Injectable({
  providedIn: 'root'
})
export class SpringVillageService {
  randomUserUrl = 'https://api.randomuser.me/'; // URL to web mock api
  constructor(
    private httpClient: HttpClient,
    @Inject(API_BASE_URL) private baseUrl: string
  ) { }

  getBeneficiaryFilterList(): Observable<any> {
    const json = {
      page: 1,
      paginationSize: 25,
      orderFiled: "name",
      orderType: "asc",
      name: null,
      gender: "Female",
      navigator: null,
      developGoal: null,
      services: null,
      caseClosure: null
    };

    const json1 = {
      page: 1,
      paginationSize: 25,
      orderFiled: null,
      orderType: null,
      name: null,
      gender: null,
      navigator: null,
      developGoal: null,
      services: null,
      caseClosure: null
    };
    return this.httpClient.post<any>(
      `${this.baseUrl}/beneficiary/searchBeneficiary`,
      json1
    );
  }

  // getUsers(
  //   pageIndex: number,
  //   pageSize: number,
  //   sortField: string | null,
  //   sortOrder: string | null,
  //   filters: Array<{ key: string; value: string[] }>,
  //   fieldType: SpringVillageType
  // ): Observable<{ results: TableData[] } | any> {
  //   let params = new HttpParams()
  //     .append('page', `${pageIndex}`)
  //     .append('results', `${pageSize}`)
  //     .append('sortField', `${sortField}`)
  //     .append('sortOrder', `${sortOrder}`)
  //     .append('fieldType', `${fieldType}`);
  //   filters.forEach(filter => {
  //     filter.value.forEach(value => {
  //       params = params.append(filter.key, value);
  //     });
  //   });
  //   console.log('fieldType', fieldType);
  //   if (fieldType === SpringVillageTypes.Test) {
  //     return this.httpClient
  //       .get<{ results: TableData[] }>(`${this.randomUserUrl}`, { params })
  //       .pipe(catchError(() => of({ results: [] })));
  //   }
  //
  //   return of(MockData[fieldType]);
  // }

  getBeneficiaryList(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>,
    fieldType: SpringVillageType
  ): Observable<any> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('paginationSize', `${pageSize}`)
      .append('orderFiled', `${sortField}`)
      .append('orderType', `${sortOrder}`)
      .append('caseClosure', false)
      .append('developGoal', false)
      .append('gender', false)
      .append('name', false)
      .append('navigator', false)
      // .append('fieldType', `${fieldType}`);\
    const reqObj: any = {};
    reqObj.page = pageIndex;
    reqObj.paginationSize = pageSize;
    reqObj.orderFiled = sortField;
    reqObj.orderType = sortOrder;
    reqObj.caseClosure = null;
    reqObj.developGoal = null;
    reqObj.gender = null;
    reqObj.name = null;
    reqObj.navigator = null;

    filters.forEach(filter => {
      filter.value.forEach(value => {
        // params = params.append(filter.key, value);
        reqObj[filter.key] = value;
      });
    });
    console.log('fieldType', fieldType);
    // if (fieldType === SpringVillageTypes.Test) {
    //   return this.httpClient
    //     .get<{ results: TableData[] }>(`${this.randomUserUrl}`, { params })
    //     .pipe(catchError(() => of({ results: [] })));
    // }
    if (fieldType === SpringVillageTypes.Beneficiary) {
      return this.httpClient
        .post<any>(`${this.baseUrl}/beneficiary/searchBeneficiary`, { ...reqObj })
        .pipe(catchError(() => EMPTY));
    }
    if (fieldType === SpringVillageTypes.Staff) {
      return this.httpClient
        .post<any>(`${this.baseUrl}/beneficiary/searchStaff`, { ...reqObj })
        .pipe(catchError(() => EMPTY));
    }
    if (fieldType === SpringVillageTypes.Cabins) {
      const reqObj: any = {};
      reqObj.number = null;
      reqObj.location = null;
      reqObj.facility = null;
      reqObj.availability = null;
      return this.httpClient
        .post<any>(`${this.baseUrl}/cabin/searchCabin`, { ...reqObj })
        .pipe(catchError(() => EMPTY));
    }

    return of(MockData[fieldType]);
  }

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>,
    component: any
  ): void {
    component.loading = true;
    component.springVillageService?.getBeneficiaryList(
      pageIndex, pageSize, sortField, sortOrder, filter, component.fieldType
    ).subscribe((data: any) => {
      console.log('data', data);
      component.loading = false;
      component.total = data.total || 200; // mock the total data here
      component.listData = data?.list || data?.results || data;
      // this.listData = data;
    });
  }

  onQueryParamsChange(params: NzTableQueryParams, component: any): void {
    console.log('params', params);
    component.cachedQueryParams = params;
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter, component);
  }
}
