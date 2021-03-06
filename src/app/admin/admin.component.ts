import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { IpService } from '../shared/services/ip.service';
import { finalize, delay } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public hasAuth: boolean;
  public isLoading = true;

  constructor(
    // private authService: AuthenticationService,
    // private ipService: IpService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.hasAuth = true;
    this.isLoading = false;
    // this.spinner.show();
    // this.ipService.getIP()
    // .pipe(delay(300), finalize(() => this.isLoading = false))
    // .subscribe(data => {
    //   this.hasAuth = this.authService.getAuthentication(data.ip);
    //   this.spinner.hide();
    // });
  }

}
