import { Injectable } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private fireStore: firebase.firestore.Firestore;
  private fireStorage: firebase.storage.Storage;
  // Initialize Firebase

  constructor() {
    this.initialize();
  }


  private initialize(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAnFhlWZerWOujhbaIkn5uM8e9PR36aJfs',
      authDomain: 'gigi-294903.firebaseapp.com',
      databaseURL: 'https://gigi-294903.firebaseio.com',
      projectId: 'gigi-294903',
      storageBucket: 'gigi-294903.appspot.com',
      messagingSenderId: '600746760661',
      appId: '1:600746760661:web:872557ca7fc7df2910055c',
      email:"piecesy7@gmail.com",
      password:"Cinderella77"
    });
    this.fireStore = firebase.firestore();
    this.fireStorage = firebase.storage();
    firebase.auth().signInWithEmailAndPassword("piecesy7@gmail.com", "Cinderella77")
  }

  getProducts(cate){
    let query = this.fireStore.collection("yqm_products").where("product_cate","==", cate);
    return query;
  }
}
