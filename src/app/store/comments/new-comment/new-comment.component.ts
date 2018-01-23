import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { Response } from '@angular/http'
import 'rxjs/Rx';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  title: string;

  message: string;

  shop: number

  constructor(private dataService: DataService) { 
    dataService.addComment(this.title, this.message, this.shop);
  }

  ngOnInit() {
  }

}
