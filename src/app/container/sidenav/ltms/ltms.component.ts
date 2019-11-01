import { Component, OnInit, Input, Output } from '@angular/core';
import { ChallengeContainer } from 'src/app/shared/interfaces/challenge-container';
import { Challenge } from 'src/app/shared/interfaces/challenge';
import * as L from 'leaflet';
import { LtmChallengeContainer } from 'src/app/shared/interfaces/ltm-challenge-container';

@Component({
  selector: 'app-ltms',
  templateUrl: './ltms.component.html',
  styleUrls: ['./ltms.component.scss']
})
export class LtmsComponent implements OnInit {
  @Input() ltms: LtmChallengeContainer[];
  @Input() map: L.Map;
  public isCollapsed = true;
  public markers = {};
  events = [];

  constructor() {}

  ngOnInit() {}

  collapse(item: any) {
    item.isCollapsed = !item.isCollapsed;
  }

  stopPropagation(event: Event, item: any) {
    event.stopPropagation();
    item.isCollapsed = !item.isCollapsed;
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
      this.markers[challenge.id + '-' + location.name] = L.marker(
        location.location,
        {
          icon: iconConst
        }
      ).addTo(this.map);
    });
  }

  removeLocationIcons(challenge: Challenge, item: ChallengeContainer) {
    challenge.locations.forEach(location => {
      this.map.removeLayer(this.markers[challenge.id + '-' + location.name]);
    });
  }

  convertMS(ms: number) {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysms = ms % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = ms % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = ms % (60 * 1000);
    // const sec = Math.floor(minutesms / 1000);
    return days + 'D ' + hours + 'H ' + minutes + 'M';
  }
}
