import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@app/services/firebase.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent {

  public innerContentTitle: string = "Option 1";
  public subNavList1 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  public navItemIndex;
  imgUrl = "assets/mylogo.png";
  public productsList = [];

  unsubscribe: any;
  constructor(public router:Router,
     private firebase: FirebaseService){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productsList = this.getProductsFromDB();
  }
  ngOnDestroy(): void{
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  passItem(item){
    console.log(item);
    this.innerContentTitle = item;
  }

  getProductsFromDB(){
    if(this.unsubscribe){
      this.unsubscribe();
    }
    this.unsubscribe = this.firebase.getProducts("Dog")
    .onSnapshot(snapshot=>{
      let dataList = [];
      snapshot.forEach(item=>{
        // console.log(item.data());
        dataList.push(item.data())
      })
      this.productsList = dataList;
    })
    return this.productsList;
  }

  readMore(){
    this.router.navigateByUrl('single-product')
    this.getProductsFromDB();
    console.log(this.productsList);
  }

}
