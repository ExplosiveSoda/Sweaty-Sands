import { Component, OnInit } from '@angular/core';
import { ChallengeContainer } from '../shared/interfaces/challenge-container';
import { Season1 } from '../shared/data/chapter-2/season-1/season-1';
import { Other } from '../shared/data/chapter-2/season-1/other';
import { Ltms } from '../shared/data/chapter-2/season-1/ltms';
import { POI } from 'src/app/shared/data/chapter-2/poi';
import * as L from 'leaflet';
import { LtmChallengeContainer } from '../shared/interfaces/ltm-challenge-container';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public sidenavToggle = false;
  public challenges: ChallengeContainer[] = Season1;
  public other: ChallengeContainer[] = Other;
  public ltms: LtmChallengeContainer[] = Ltms;

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
      minZoom: -6,
      maxZoom: -1,
      attributionControl: false,
      zoomControl: false
    });
    const bounds = L.latLngBounds([[0, 0], [30000, 30000]]);
    const image = L.imageOverlay('../../../assets/images/chapter-2-map-big.png', bounds).addTo(this.map);
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
    // this.other.forEach(titleChallenge => {
    //   if (titleChallenge.isChecked === true) {
    //     titleChallenge.challenges.forEach(item => {
    //       if (item.isChecked === true) {
    //         item.location.forEach(location => {
    //           const iconConst = L.icon({
    //             iconUrl: item.icon,
    //             iconAnchor: [0, 0],
    //             iconSize: [500, 500]
    //           });
    //           const marker = L.marker(location, {
    //             icon: iconConst
    //           });
    //           marker.bindTooltip('hoverboard', {
    //             permanent: true,
    //             direction: 'center',
    //             className: 'my-labels',
    //             offset: [0, 0]
    //           }).openTooltip();
    //           marker.addTo(this.map);
    //         });
    //       }
    //     });
    //   }
    // });
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

    this.map.setView( middle, -5);
    // below bounces image back to middle
    // map.setMaxBounds(map.getBounds());

    // const sol = L.latLng([ 7500, 7500 ]);
    // L.marker(sol).addTo(map);
    // L.marker(sol, {
    //   title: 'test'
    // }).addTo(map);
    // L.popup()
    //   .setLatLng([ 7500, 7500 ])
    //   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    //   .openOn(map);


    // map.on('dragend', function onDragEnd(){
    //   const width = map.getBounds().getEast() - map.getBounds().getWest();
    //   const height = map.getBounds().getNorth() - map.getBounds().getSouth();

    //   alert (
    //       'center:' + map.getCenter() +'\n'+
    //       'width:' + width +'\n'+
    //       'height:' + height +'\n'+
    //       'size in pixels:' + map.getSize()
    //   )});

    // map.addControl(
    //   L.control.extend({
    //     options: {
    //       position: 'topleft'
    //     }
    //   })
    // );

    // const bottomLeft = map.getPixelBounds().getBottomLeft();
    // const topRight = map.getPixelBounds().getTopRight();
    // const pixelMiddle = map.getPixelBounds().getCenter();
    // const width = map.getBounds().getEast() - map.getBounds().getWest();
    // const height = map.getBounds().getNorth() - map.getBounds().getSouth();
    // const widthPercentage = 7200 / 7995;
    // const heightPercentage = 5250 / 7995;
    // const newWidth = widthPercentage * width;
    // const newHeight = heightPercentage * height;
    // const testIcon = L.icon({
    //   iconUrl: '../../../assets/images/leaf-green.png',
    //   iconAnchor: [10008, 6986]
    // });
    // const marker = L.marker([10008, 6986], { icon: testIcon, opacity: 0.01 });
    // marker.bindTooltip('GOTHAM CITY', {permanent: true, direction: 'center', className: 'my-labels', offset: [0, 0] }).openTooltip();
    // marker.addTo(map);
  }
}
