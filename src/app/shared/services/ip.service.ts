import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  public getIP() {
    // return this.http.get<{ip: string}>('https://jsonip.com');
    return this.http.get<{ip: string}>('https://sweatysands.com');
  }
}
