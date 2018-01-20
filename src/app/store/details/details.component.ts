import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  imgUrl: string;

  @Input()
  title: string;

  @Input()
  author: string;

  constructor() { }

  ngOnInit() {
  }

}
