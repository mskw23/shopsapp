import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOn: boolean = false;
  isAuthenticated: boolean;
  
  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated = authService.isAuthenticated()
   }

   logout() {
     this.authService.logout();
     this.isAuthenticated = this.authService.isAuthenticated()
     this.router.navigate(['/']);
     this.toggle()
   }

  ngOnInit() {
  }

  toggle() {
    this.isOn = ! this.isOn;
  }

}
