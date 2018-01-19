import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response } from '@angular/http'
import 'rxjs/Rx';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  sample: number = 10;
  count: number = 0;
  next: string;
  previous: string;
  results: [{}];

  constructor(private dataService: DataService) { 
    this.dataService.getStores()
    .subscribe(
      (response: Response) => {
        const data = response.json()
        this.count = data['count'];
        this.next = data['next'];
        this.previous = data['previous'];
        this.results = data['results'];
      },
      (error) => console.log(error)
    );
  }

  getResults() {
    return this.results;
  }

  getCount() {
    return this.count;
  }

  ngOnInit() {
  }

}
