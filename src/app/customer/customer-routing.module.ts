import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {path:"", component: CustomerComponent},
  { path: 'single-product',  component: SingleProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
