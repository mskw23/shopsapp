import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

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
          console.log(token);
        }
      )
  }

}
