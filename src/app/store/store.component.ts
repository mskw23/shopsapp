import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response } from '@angular/http'
import 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  title: string;
  imageUrl: string;
  description: string;
  author: string;
  products: [{}];
  comments: [{}];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.dataService.getStore(this.route.snapshot.params['slug'])
    .subscribe(
      (response: Response) => {
        const data = response.json();
        this.description = data['description'];
        this.title = data['title'];
        this.products = data['products'];
        this.comments = data['comments'];
        this.author = data['autor'];
        this.imageUrl = data['image'];
        console.log(data['image']);
      },
      (error) => console.log(error)
    );
   }

  ngOnInit() {
  }

}
