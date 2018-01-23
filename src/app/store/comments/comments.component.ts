import { Component, OnInit ,Input } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  shopId: string;

  @Input()
  comments: [{}];

  isAuthenticated = false;

  constructor(private authService: AuthService) {
    if (authService.isAuthenticated()) {
      this.isAuthenticated = true;
    }
   }

  addToComments(comment) {
    this.comments.push(comment);
  }

  ngOnInit() {
  }

}
