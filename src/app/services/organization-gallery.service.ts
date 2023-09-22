import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationGalleryService {

constructor(
  private httpClient: HttpClient
) { }

  getOrgDate() {
    return this.httpClient.get('assets/organizationData.json')
  }
}
