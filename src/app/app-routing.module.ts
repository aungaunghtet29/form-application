import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  {
    path : "home" , component : FormComponent
  },
  {
    path : "validate" , component : ValidationComponent
  },
  {
    path : "" , redirectTo : "/home" , pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
