import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule,
  MatNativeDateModule
} from '@angular/material';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
