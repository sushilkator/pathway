import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {FuelQuoteFormComponent} from './fuel-quote-form/fuel-quote-form.component'
import {FuelquotehistoryComponent} from './fuelquotehistory/fuelquotehistory.component'
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'fuelquote', component: FuelQuoteFormComponent},
  { path: 'fuelquotehistory', component: FuelquotehistoryComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
