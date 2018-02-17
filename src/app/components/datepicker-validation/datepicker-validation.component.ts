import { Component, OnInit } from '@angular/core';
import { DatepikcerValidationModel } from './datepicker-validation.model';

@Component({
  selector: 'app-datepicker-validation',
  templateUrl: './datepicker-validation.component.html',
  styleUrls: ['./datepicker-validation.component.css']
})
export class DatepickerValidationComponent implements OnInit {

  public model = new DatepikcerValidationModel('');

  constructor() { }

  ngOnInit() {
  }

}
