import { Component, OnInit } from '@angular/core';
import { ChallengeContainer } from '../../shared/interfaces/challenge-container';
import { Season1 } from '../../shared/data/chapter-2/season-1/season-1';
import { Other } from '../../shared/data/chapter-2/season-1/other';
import { POI } from 'src/app/shared/data/chapter-2/poi';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap';
import { InputModalComponent } from 'src/app/ui/input-modal/input-modal.component';
import { PoiLocations } from 'src/app/shared/interfaces/poi-locations';

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

  public clickToggle = false;
  public clickValue: PoiLocations = {name, location};
  public clickList: PoiLocations[] = [];

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    const x = this.sidenavToggle;
    this.makeMap();
  }
  mapClick(e) {
    if (this.clickToggle === true) {
      const temp = this.modalService.show(InputModalComponent);
      temp.content.title = 'Input Name of Location';
      temp.content.body = '';
      temp.content.modalRef = temp;
      this.tempWidth = e.latlng.lat;
      this.tempHeight = e.latlng.lng;
      temp.content.clickValue = {name: '', location: ''};
      temp.content.clickValue.location = Math.round(this.tempWidth) + ', ' + this.tempHeight;
      temp.content.clickList = this.clickList;
      // this.clickValue = temp.content.body + Math.round(this.tempWidth) + ', ' + this.tempHeight;
      // this.clickList.push(this.clickValue);
    }
  }

  clickToggleReceive(e) {
    this.clickToggle = e;
  }

  // openDeleteModal(building: BuildingGroupBuilding) {
  //   const temp = this.modalService.show(InputModalComponent);
  //   temp.componentInstance.title = 'Remove building';
  //   temp.componentInstance.body = `Are you sure you want to remove ${building.name} from ${this.currentGroup.name}?`;
  //   temp.result.then(result => {
  //     if (result === confirm) {
  //       this.deleteBuildingFromGroup(this.currentGroup.id, building.id);
  //       this.buildings.splice(this.buildings.indexOf(building), 1);
  //     }
  //   });
  // }

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
    this.map.on('click', (e) => {
      this.mapClick(e);
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
