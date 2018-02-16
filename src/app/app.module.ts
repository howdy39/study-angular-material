import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { DatepickerValidationComponent } from './components/datepicker-validation/datepicker-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    DatepickerValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
