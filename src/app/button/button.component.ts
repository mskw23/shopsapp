import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  width: number = 200;
  height: number = 100;
  degree: number = 2;
  hover: boolean = false;
  @Input()
  fontSize = "40px";

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("elo");
  }

  onHover() {
    this.hover = true
  }

  onLeave() {
    this.hover = false
  }

  getOuterDegree() {
    return this.hover === true ? this.degree+'deg' : '-'+this.degree+'deg'
  }

  getInnerDegree() {
    return this.hover === true ? '-'+this.degree * 2+'deg' : this.degree * 2+'deg'
  }

  getLeftSign() {
    return this.hover === true ? '' : '-'
  }

  getRightSign() {
    return this.hover === true ? '-' : ''
  }

  getWidth() {
    return this.width
  }

  getHeight() {
    return this.height
  }

  getDegree() {
    return this.degree;
  }

}
