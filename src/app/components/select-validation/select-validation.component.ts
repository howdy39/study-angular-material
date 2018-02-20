import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-validation',
  templateUrl: './select-validation.component.html',
  styleUrls: ['./select-validation.component.css']
})
export class SelectValidationComponent implements OnInit {

  public foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  public selected = 'pizza-1';


  public animalControl = new FormControl('', [Validators.required]);

  public animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];

  ngOnInit() {
  }

}
