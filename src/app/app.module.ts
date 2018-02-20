import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule,
  MatNativeDateModule, MatSelectModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { DatepickerValidationComponent } from './components/datepicker-validation/datepicker-validation.component';
import { CustomDatePickerModule } from './components/datepicker-validation/custom-date-adapter';
import { SelectAsyncComponent } from './components/select-async/select-async.component';
import { SelectAsyncService } from './components/select-async/select-async.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerValidationComponent,
    SelectAsyncComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CustomDatePickerModule,
    HttpClientModule,
  ],
  providers: [
    SelectAsyncService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
