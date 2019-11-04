import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  constructor(
    // public activeModal: ngba
  ) { }

  ngOnInit() {
  }

  close() {
    // this.activeModal.close();
  }

  closeConfirmation() {
    // this.activeModal.close(confirm);
  }
}
