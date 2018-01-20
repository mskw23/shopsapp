import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  description: string;

  @Input()
  price: number;

  @Input()
  quantity: number;

  @Input()
  imgSrc: string;

  value: number = 1;

  getImgSrc() {
    return this.imgSrc;
  }

  getValue() {
    return this.value;
  }

  getPrice() {
    return this.value * this.price
  }

  addProduct() {
    if(this.value < this.quantity) {
      this.value ++;
    }
  }



  deleteProduct() {
    if(this.value > 0) {
      this.value --;
    }
    
  }

  onButtonClick() {
    console.log("click");
  }

  constructor() { }

  ngOnInit() {
  }

}
