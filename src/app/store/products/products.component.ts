import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Output() onOrderClicked: EventEmitter<any> = new EventEmitter<any>();

  @Input() 
  products: [{}]

  constructor() { 
  }

  ngOnInit() {
    console.log(this.products);
  }

  getOrder(order) {
    this.onOrderClicked.emit(order);
  }

  getCount() {
    if(this.products) {
      return this.products.length;
    } else {
      return 0;
    }
    
  }

}
