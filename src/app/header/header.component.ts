import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOn: boolean = false;
  isAuthenticated: boolean;
  
  constructor(private authService: AuthService) {
    this.isAuthenticated = authService.isAuthenticated()
   }

   logout() {
     this.authService.logout();
     this.isAuthenticated = this.authService.isAuthenticated()
     this.toggle()
   }

  ngOnInit() {
  }

  toggle() {
    this.isOn = ! this.isOn;
  }

}
