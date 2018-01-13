import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  degree: number = 0.5;

  @Input()
  imgSrc: string;

  @Input()
  imgAlt: string;

  constructor() { }

  getImgSrc() {
    return this.imgSrc;
  }

  getImgAlt() {
    return this.imgAlt;
  }

  getInnerDegree() {
    return this.degree * 2+'deg';
  }

  ngOnInit() {
  }

}
