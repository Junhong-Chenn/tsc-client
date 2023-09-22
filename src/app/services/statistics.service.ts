import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNetData() {
    return this.httpClient.get('assets/netData.json')
  }
}
