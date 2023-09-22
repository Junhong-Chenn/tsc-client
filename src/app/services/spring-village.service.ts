import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { API_BASE_URL } from "../settings/project-setting";
import { Observable, of } from "rxjs";
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

  getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>,
    fieldType: SpringVillageType
  ): Observable<{ results: TableData[] } | any> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`)
      .append('fieldType', `${fieldType}`);
    filters.forEach(filter => {
      filter.value.forEach(value => {
        params = params.append(filter.key, value);
      });
    });
    console.log('fieldType', fieldType);
    if (fieldType === SpringVillageTypes.Test) {
      return this.httpClient
        .get<{ results: TableData[] }>(`${this.randomUserUrl}`, { params })
        .pipe(catchError(() => of({ results: [] })));
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
    component.springVillageService.getUsers(
      pageIndex, pageSize, sortField, sortOrder, filter, component.fieldType
    ).subscribe((data: any) => {
      console.log('data', data);
      component.loading = false;
      component.total = 200; // mock the total data here
      component.listData = data?.results || data;
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
