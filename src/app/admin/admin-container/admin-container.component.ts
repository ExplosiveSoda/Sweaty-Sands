import { Component, OnInit } from '@angular/core';
import { ChallengeContainer } from '../../shared/interfaces/challenge-container';
import { Season1 } from '../../shared/data/chapter-2/season-1/season-1';
import { Other } from '../../shared/data/chapter-2/season-1/other';
import { POI } from 'src/app/shared/data/chapter-2/poi';
import * as L from 'leaflet';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss']
})
export class AdminContainerComponent implements OnInit {
  public sidenavToggle = false;
  public challenges: ChallengeContainer[] = Season1;
  public other: ChallengeContainer[] = Other;

  public pois = POI;
  public tempWidth: number;
  public tempHeight: number;

  public map: L.Map;

  constructor() { }

  ngOnInit() {
    const x = this.sidenavToggle;
    this.makeMap();
  }

  makeMap() {
    this.map = L.map('leafletmap', {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: 2,
      attributionControl: false,
      zoomControl: false
    });
    const bounds = L.latLngBounds([[0, 0], [4096, 4096]]);
    const image = L.imageOverlay('../../../assets/images/chapter-2-map.png', bounds).addTo(this.map);
    this.map.fitBounds(bounds);
    this.map.on('click', function(ev: any) {
      this.tempWidth = ev.latlng.lat;
      this.tempHeight = ev.latlng.lng;
      // alert (
      //     'width:' + this.tempWidth + '\n' + 'height:' + this.tempHeight + '\n'
      // );
    });
    this.map.addControl(
      L.control.attribution({
        position: 'bottomright',
        prefix: 'Not affiliated with Epic Games'
      })
    );
    this.map.addControl(
      L.control.zoom({
        position: 'topright'
      })
    );
    const middle = this.map.getCenter();
    this.pois.forEach(poi => {
      const poiIcon = L.icon({
        iconUrl: '../../../assets/images/leaf-green.png',
        iconAnchor: poi.location
      });
      const mapPoi = L.marker(poi.location, {
        icon: poiIcon,
        opacity: 0.01
      });
      mapPoi.bindTooltip(poi.name, {
        permanent: true,
        direction: 'center',
        className: 'my-labels',
        offset: [0, 0]
      }).openTooltip();
      mapPoi.addTo(this.map);
    });

    this.map.setView( middle, -2);
  }
}