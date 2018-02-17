// Custom DateAdapter
import {NgModule} from '@angular/core';
import {MatDatepickerModule, MatNativeDateModule, NativeDateAdapter, DateAdapter} from '@angular/material';

// extend NativeDateAdapter's format method to specify the date format.
export class CustomDateAdapter extends NativeDateAdapter {
  isValid(date: Date) {
    console.log(date);
    return !isNaN(date.getTime());
  }
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [MatDatepickerModule, MatNativeDateModule],
  providers: [
    {
      provide: DateAdapter, useClass: CustomDateAdapter
    },
  ]
})

export class DatePickerModule {

}
