import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent} from './payment/payment.component'
import { FormsModule }   from '@angular/forms';
import {TermsandconditionComponent} from './termsandcondition/termsandcondition.component'

const routes: Routes = [
  // {path: '' , component : PaymentComponent ,},
  {path: 'payment-security' , component : PaymentComponent },
  {path: 'terms' , component : TermsandconditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
      FormsModule , ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
