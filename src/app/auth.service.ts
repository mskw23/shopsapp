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

  decodeCurrentUser() {
    const token = localStorage.getItem('token');
    if (token) {
      return this.jwtHelper.decodeToken(token);
    } else {
      return null;
    }
  }

  register(username: string, email: string, password: string) {
    return this.http.post('http://localhost:8000/api/users/register/', {username: username, email: email, password: password});
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:8000/api/users/login/', {email: email, password: password});
  }

  getToken() {
    return this.token;
  }

}
