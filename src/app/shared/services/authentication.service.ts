import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host: string;
  private safeHost = '10.87.144.128';
  private safeIPs = ['2600:6c67:6080:2b7f:e90c:bb09:5103:779b', '161.7.106.189'];
  constructor() { }

  public getAuthentication(ip: string): boolean {
    this.host = window.location.hostname;
    // if (this.host === this.safeHost || this.safeIPs.indexOf(ip) !== -1) {
    if (this.host === this.safeHost || 1 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
