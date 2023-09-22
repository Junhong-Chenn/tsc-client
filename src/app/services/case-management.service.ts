import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CaseManagementService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getServiceData() {
    return this.httpClient.get('assets/serviceData.json')
  }

  getBeneficiaryData() {
    return this.httpClient.get('assets/beneficiaryData.json')
  }
}
