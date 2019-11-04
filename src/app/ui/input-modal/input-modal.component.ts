import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PoiLocations } from 'src/app/shared/interfaces/poi-locations';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() modalRef: BsModalRef;
  @Input() clickList: PoiLocations[];
  @Input() clickValue: PoiLocations;
  constructor(
    public modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  close() {
    this.clickValue.name = this.body;
    this.clickList.push(this.clickValue);
    this.modalRef.hide();
  }
}
