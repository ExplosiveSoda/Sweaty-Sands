import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PoiLocations } from 'src/app/shared/interfaces/poi-locations';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() modalRef: BsModalRef;
  constructor(
    public modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalRef.hide();
  }
}
