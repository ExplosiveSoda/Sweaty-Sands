import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { IpService } from '../../shared/services/ip.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public hasAuth: boolean;

  constructor(
    // private authService: AuthenticationService,
    // private ipService: IpService
  ) { }

  ngOnInit() {
    // this.ipService.getIP().subscribe(data => {
    //   this.hasAuth = this.authService.getAuthentication(data.ip);
    // });
    this.hasAuth = true;
  }

}
