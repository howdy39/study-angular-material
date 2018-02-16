import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerValidationComponent } from './components/datepicker-validation/datepicker-validation.component';

const routes: Routes = [
  {
    path: 'datepicker-validation',
    component: DatepickerValidationComponent,
  },
  { path: '',
    component: DatepickerValidationComponent,
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
