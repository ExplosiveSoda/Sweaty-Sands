import { Injectable } from '@angular/core';
import { IpService } from './ip.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host: string;
  private safeHost = '10.87.144.128';
  private safeIPs = ['', '161.7.106.189'];
  constructor(
    private ipService: IpService
  ) { }

  public getAuthentication(ip: string): boolean {
    this.host = window.location.hostname;
    if (this.host === this.safeHost || this.safeIPs.indexOf(ip) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
