import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions } from '@angular/http'
import { AuthService } from './auth.service'
import { Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private http: Http, private authService: AuthService) {}

    getStores() {
        return this.http.get('http://localhost:8000/api/shops/');
    }

    getStore(slug: string) {
        return this.http.get('http://localhost:8000/api/shops/' + slug);
    }

    addComment( title: string, message: string, shop: number) {
        let headers = new Headers();
        headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        let opts = new RequestOptions();
        opts.headers = headers;
        this.http.post('http://localhost:8000/api/comments/create/', 
        {title: title, message: message, shop: shop}, opts)
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            )
    }

    
}