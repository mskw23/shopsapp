import { Injectable } from '@angular/core'
import {Http} from '@angular/http'

@Injectable()
export class DataService {
    constructor(private http: Http) {}

    getStores() {
        return this.http.get('http://localhost:8000/api/shops/');
    }
}