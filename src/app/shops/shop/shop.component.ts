import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input()
  imgSrc: string;
  @Input()
  url: string;
  @Input()
  slug: string;

  getImgSrc() {
    return this.imgSrc;
  }

  getUrl() {
    return "shop/" + this.slug;
  }

  constructor() { }

  ngOnInit() {
  }

}
