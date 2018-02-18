import {NgModule} from '@angular/core';
import {MatDatepickerModule, MatNativeDateModule, NativeDateAdapter, DateAdapter} from '@angular/material';

export class CustomDateAdapter extends NativeDateAdapter {
  parse(value: any): Date | null {
    // 日付のフォーマットかどうかを確認
    const matches = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (matches === null) {
      return null;
    }
    const month = matches[1] - 1;
    const day = matches[2];
    const year = matches[3];
    const date = new Date(year, month, day);

    // 日付として正しくない場合のズレを確認
    // 例）`2/31/2018` だと new Date() で `3/3/2018` になり、Month がずれるので不正
    if (date.getFullYear() !== Number(year)
      || date.getMonth() !== Number(month)
      || date.getDate() !== Number(day)) {
      return null;
    }
    return date;
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
