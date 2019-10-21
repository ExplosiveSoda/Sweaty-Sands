import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  public currencies = ['AUD', 'BRL'];
  public amount = 5;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  public form = this.formBuilder.group({
    currency: [null],
    amount: []
  });

  ngOnInit() {
  }

}
