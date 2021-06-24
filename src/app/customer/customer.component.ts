import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent {

  public innerContentTitle: string = "Option 1";
  public subNavList1 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  public navItemIndex;
  constructor(){

  }

  passItem(item){
    console.log(item);
    this.innerContentTitle = item;
  }


}
