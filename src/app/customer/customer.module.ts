import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SingleProductComponent } from './single-product/single-product.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [CustomerComponent, SingleProductComponent, HeaderComponent, SideBarComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    // Router,
    // HeaderComponent,
    // SideBarComponent
  ]
})
export class CustomerModule {

 }
