import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() 
  products: [{}]

  constructor() { }

  ngOnInit() {
  }

  getCount() {
    if(this.products) {
      return this.products.length;
    } else {
      return 0;
    }
    
  }

}
