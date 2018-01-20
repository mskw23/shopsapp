import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Response } from '@angular/http'
import 'rxjs/Rx';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  token: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) { }

  logout() {
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  register(username: string, email: string, password: string) {
    this.http.post('http://localhost:8000/api/users/register/', {username: username, email: email, password: password})
      .subscribe(
        (response: Response) => {
          this.login(email, password);
        }
      )
  }

  login(email: string, password: string) {
    this.http.post('http://localhost:8000/api/users/login/', {email: email, password: password})
      .subscribe(
        (res: Response) => {
          const token = res.json()['token'];
          localStorage.setItem('token', token);
        }
      )
  }

  getToken() {
    return this.token;
  }

}
