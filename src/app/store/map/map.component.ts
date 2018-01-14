import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  longitude = 50.0;
  latitude = 17.0;

  constructor() { }

  ngOnInit() {
  }

}
