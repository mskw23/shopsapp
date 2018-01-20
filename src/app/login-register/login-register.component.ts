import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  isLogin: boolean = true;
  degg: string = this.isLogin ? "1" : "-1";
  degg2: string = this.isLogin ? "-1" : "1";

  constructor(private router: Router, private route: ActivatedRoute) { 
    console.log(router.url);
    if(router.url == '/login') {
      this.isLogin = true 
    } else {
      this.isLogin = false
    }
    this.degg = this.isLogin ? "1" : "-1";
    this.degg2 = this.isLogin ? "-1" : "1";
  }

  setLogin(choice: boolean) {
    if(choice == false) {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  getDegree() {
    return this.degg;
  }

  getDegree2() {
    return this.degg2;
  }

  ngOnInit() {
  }

}
