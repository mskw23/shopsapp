import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  user: string;

  constructor() { }

  ngOnInit() {
  }

}
