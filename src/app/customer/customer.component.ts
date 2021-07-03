import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@app/services/firebase.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent {

  public innerContentTitle: string = "";
  public subNavList1 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  public navItemIndex;
  imgUrl = "assets/mylogo.png";
  public productsList = [];

  unsubscribe: any;
  navList = [];
  constructor(public router:Router,
     private firebase: FirebaseService){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.productsList = this.getProductsFromDB();
    // this.navList = this.getNavFromDB();
    this.renderCate();
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

  getProductsFromDB(cate){
    if(this.unsubscribe){
      this.unsubscribe();
    }
    this.unsubscribe = this.firebase.getProducts(cate)
    .onSnapshot(snapshot=>{
      let dataList = [];
      snapshot.forEach(item=>{
        // console.log(item.data());
        dataList.push(item.data())
      })
      this.productsList = dataList;
      console.log(this.productsList);
    })
    return this.productsList;
  }

  getNavFromDB(){
    if(this.unsubscribe){
      this.unsubscribe();
    }
    this.unsubscribe = this.firebase.getNav()
    .onSnapshot(snapshot=>{
      let dataList = [];
      snapshot.forEach(item=>{
        // console.log(item.data());
        dataList.push(item.data())
      })
      this.navList = dataList.map(value => value.nav_cate);
      console.log(this.navList);
      console.log("!111");

    })
    return this.navList;
  }

  cateList =  [];
  renderCate(){
    this.getNavFromDB();
    console.log(this.navList);
    for(let i=0; i<this.navList.length;i++){
      this.getProductsFromDB(this.navList[i]);
    }
    console.log(this.productsList);

  }
  readMore(){
    this.router.navigateByUrl('single-product')
    // this.getProductsFromDB();
    console.log(this.productsList);
  }

}
