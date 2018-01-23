import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../data.service';
import { AuthService } from '../../../auth.service';
import { Response } from '@angular/http'
import 'rxjs/Rx';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Output() onComentSent: EventEmitter<any> = new EventEmitter<any>();


  title: string;

  message: string;

  @Input()
  shop: number

  constructor(private dataService: DataService, private authService: AuthService) { 
    
  }

  newCommentAdded() {
    this.dataService.addComment(this.title, this.message, this.shop).subscribe(
      (response: Response) => {
          this.onComentSent.emit({title: this.title, message: this.message, user: this.authService.decodeCurrentUser()['username']})
          this.title = "";
          this.message = "";
        }
    );
  }

  ngOnInit() {
  }

}
