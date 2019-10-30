import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-map',
  templateUrl: './admin-map.component.html',
  styleUrls: ['./admin-map.component.scss']
})
export class AdminMapComponent implements OnInit {
  @Input() sidenavToggle: boolean;
  public tempWidth: number;
  public tempHeight: number;
  public screenWidth: number;

  constructor() { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.toggleByScreenSize();
  }

  toggleByScreenSize() {
    if (this.screenWidth < 1000) {
      document.getElementById('sidenav').style.width = '0';
      document.getElementById('main').style.width = '100%';
    }
  }

  toggle() {
    if (this.sidenavToggle === false) {
      document.getElementById('sidenav').style.width = '0';
      document.getElementById('main').style.width = '100%';
      this.sidenavToggle = true;
    } else {
      document.getElementById('sidenav').style.width = '20%';
      document.getElementById('main').style.width = '80%';
      this.sidenavToggle = false;
    }
  }

}
