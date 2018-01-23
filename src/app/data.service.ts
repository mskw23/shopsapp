import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions } from '@angular/http'
import { AuthService } from './auth.service'
import { Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private http: Http, private authService: AuthService) {}

    getStores(url: string) {
        return this.http.get('http://localhost:8000/api/shops/'+url);
    }

    getStore(slug: string) {
        return this.http.get('http://localhost:8000/api/shops/' + slug);
    }

    addComment( title: string, message: string, shop: number) {
        let headers = new Headers();
        headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        let opts = new RequestOptions();
        opts.headers = headers;
        return this.http.post('http://localhost:8000/api/comments/create/', 
        {title: title, message: message, shop: shop}, opts)
            
    }

    addShop( form: {} ) {
        console.log(form);
        let headers = new Headers();
        headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        headers.append('Content-Type', 'application/json');
        let opts = new RequestOptions();
        opts.headers = headers;
        return this.http.post('http://localhost:8000/api/shops/create/', 
        form, opts)
            
    }

    addProduct( form: {} ) {
        console.log(form);
        let headers = new Headers();
        headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        headers.append('Content-Type', 'application/json');
        let opts = new RequestOptions();
        opts.headers = headers;
        return this.http.post('http://localhost:8000/api/products/create/', 
        form, opts).subscribe(
                (response: Response) => {
                  console.log(response);
                }
            );
    }

    updateShop( form: {} ) {
        console.log(form);
        let headers = new Headers();
        headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        headers.append('Content-Type', 'application/json');
        let opts = new RequestOptions();
        opts.headers = headers;
        this.http.post('http://localhost:8000/api/shops/'+form['slug']+'/update/', 
        form, opts)
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            )
    }

    updateProduct( form: {} ) {
        console.log(form);
        let headers = new Headers();
        headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        headers.append('Content-Type', 'application/json');
        let opts = new RequestOptions();
        opts.headers = headers;
        this.http.post('http://localhost:8000/api/products/'+form['id']+'/update/', 
        form, opts)
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            )
    }

    
}