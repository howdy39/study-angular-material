import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerValidationComponent } from './components/datepicker-validation/datepicker-validation.component';
import { SelectAsyncComponent } from './components/select-async/select-async.component';

const routes: Routes = [
  {
    path: 'datepicker-validation',
    component: DatepickerValidationComponent,
  },
  {
    path: 'select-validation',
    component: SelectAsyncComponent,
  },
  { path: '',
    component: SelectAsyncComponent,
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
