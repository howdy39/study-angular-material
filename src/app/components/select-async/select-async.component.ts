import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Dogs } from './select-async.models';
import { SelectAsyncService } from './select-async.service';

@Component({
  selector: 'app-select-validation',
  templateUrl: './select-async.component.html',
  styleUrls: ['./select-async.component.css']
})
export class SelectAsyncComponent implements OnInit {

  public foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  public selected = 'pizza-1';


  public selectedAnimal = {};
  public animalControl = new FormControl('', [Validators.required]);

  public animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];

  public dogsObservable: Observable<Dogs>;


  constructor(
    private service: SelectAsyncService
  ) {
  }

  ngOnInit() {
    this.dogsObservable = this.service.dogsList();
  }

}
