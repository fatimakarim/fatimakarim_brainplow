import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Config } from "../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html'
})
export class UserSidebarComponent implements OnInit {
  eUsage;
  months;
  cUsage;
  message: string;
  constructor(private http: Http, private route: ActivatedRoute, private sg: SimpleGlobal, private data: DataService) { }
  zip_code;
  ngOnInit() {
    this.data.currentProducts.subscribe(products => this.sg['products'] = products)

    this.zip_code = this.sg['product_zipcode'];

  }
  onChange(e) {
    alert(e)
  }
  usage = [
    { value: 'building-0', viewValue: 'Building' },
    { value: 'restaurant-1', viewValue: 'Restaurant' },
    { value: 'store-2', viewValue: 'Store' },
    { value: 'manufacturing-plant-2', viewValue: 'Manufacturing Plant' },
    { value: 'office-2', viewValue: 'Office' },
    { value: 'other-2', viewValue: 'Other' }
  ];
  check(e) {
    // this.route.params.subscribe(params => {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + '/price_range/price_' + e + '_kwh/5.6/6.1/' + this.zip_code + '/', { headers: headers })
    //   .subscribe(Res => {
    //     this.sg['products'] = Res.json()['Results'];
    //     this.data.changeProducts(this.sg['products']);

    //   });
    // //  }); 

  }
  fetchProducts() {
    // this.route.params.subscribe(params => {
   //   let zip =  this.sg['product_zipcode'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.post(Config.api + 'filter/' + this.zip_code + '', {"month": this.months+" Month", "custom":"['2','8']"},{ headers: headers })
      .subscribe(Res => {
        this.sg['products'] = Res.json()['Results'];
        this.data.changeProducts(this.sg['products']);
          
     });
  
  //   .subscribe(Res => {
  //     this.sg['products'] = Res.json()['Results'];
  //     this.data.changeProducts(this.sg['products']);
      
      
  //  }
  
  
  //);
    //  }); 

  }///filter/75001
  //fetchProductsandplan() {
    // this.route.params.subscribe(params => {
    //  let zip =  this.sg['product_zipcode'];
  //  let headers = new Headers();
  //  headers.append('Content-Type', 'application/json');
  //  this.http.get(Config.api + 'filter/' + this.zip_code + '', { headers: headers })
   //   .subscribe(Res => {
      //  this.sg['products'] = Res.json()['Results'];
    //    this.data.changeProducts(this.sg['products']);

    //  });
    //  }); 

  


}