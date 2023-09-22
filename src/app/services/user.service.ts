import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API_BASE_URL } from "../settings/project-setting";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    @Inject(API_BASE_URL) private baseUrl: string
  ) { }

  testApi(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/haipigou/ManagerUserController/managerLogin?uPhone=13820708732&uPwd=123asd`);
  }
}
