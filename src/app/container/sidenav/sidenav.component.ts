import { Component, OnInit, Input } from '@angular/core';
import { ChallengeContainer } from 'src/app/shared/interfaces/challenge-container';
import { SeasonX } from 'src/app/shared/data/season-x/season-x';
import { Challenge } from 'src/app/shared/interfaces/challenge';
import { Other } from 'src/app/shared/data/Season-X/other';
import * as L from 'leaflet';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sidenavToggle: boolean;
  @Input() challenges: ChallengeContainer[];
  @Input() other: ChallengeContainer[];
  @Input() map: L.Map;
  public isCollapsed = true;
  public markers = {};
  events = [];

  constructor() {}

  ngOnInit() {
    // this.toggle();
  }

  collapse(item: any) {
    item.isCollapsed = !item.isCollapsed;
  }

  stopPropagation(event: Event, item: any) {
    event.stopPropagation();
    item.isCollapsed = !item.isCollapsed;
  }

  stop2(event: Event, item: any) {
    event.stopPropagation();
  }

  toggle() {
    if (this.sidenavToggle === false) {
      document.getElementById('sidenav').style.width = '0';
    }
  }

  toggleWeekChallenges(event: any, week: ChallengeContainer) {
    // alert(week.currentTarget.checked);
    // if (week.currentTarget.checked === true) {
    //   week.challenges.forEach(e => {
    //     e.
    //   });
    // }
    if (event.currentTarget.checked === true) {
      week.isChecked = true;
      week.challenges.forEach(e => {
        e.isChecked = true;
        if (e.locations !== null) {
          this.addLocationIcons(e, week);
        }
      });
    } else {
      week.challenges.forEach(e => {
        if (e.isChecked === true) {
          e.isChecked = false;
          if (e.locations !== null) {
            this.removeLocationIcons(e, week);
          }
        }
      });
      week.isChecked = false;
    }
  }

  updateWeekCheck(challenge: Challenge, item: ChallengeContainer, event: any) {
    if (event.currentTarget.checked === true) {
      challenge.isChecked = true;
      item.isChecked = true;
      this.addLocationIcons(challenge, item);
    } else if (challenge.isChecked === true) {
      challenge.isChecked = true;
      item.isChecked = true;
      this.addLocationIcons(challenge, item);
    } else {
      challenge.isChecked = false;
      if (item.challenges.find(e => e.isChecked === true)) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }
      this.removeLocationIcons(challenge, item);
    }
  }

  addLocationIcons(challenge: Challenge, item: ChallengeContainer) {
    challenge.locations.forEach(location => {
      const iconConst = L.icon({
        iconUrl: challenge.icon.image,
        iconSize: challenge.icon.size,
        iconAnchor: challenge.icon.anchor
      });
      this.markers[location.name] = L.marker(location.location, {
        icon: iconConst
      }).addTo(this.map);
    });
  }

  removeLocationIcons(challenge: Challenge, item: ChallengeContainer) {
    challenge.locations.forEach(location => {
      this.map.removeLayer(this.markers[location.name]);
    });
  }
}
