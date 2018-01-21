import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response } from '@angular/http'
import 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  title: string;
  imageUrl: string;
  description: string;
  author: string;
  products: [{}];
  comments: [{}];

  orders: [{}] = [{}];

  isOrderOn: boolean = false;
  isOwnerOn: boolean = false;
  isAuthenticated: boolean;
  isOwner: boolean;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute, private authService: AuthService) {
    this.isAuthenticated = authService.isAuthenticated();
    if(router.url == '/shop') {
      this.isOwner = true;
      this.author = authService.decodeCurrentUser()['username']
      this.imageUrl = '../../assets/store-img.png'
      this.title = "SUPER SHOP"
      this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      this.products = [
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          price: 10,
          quantity: 10,
          image: '../../../assets/store-img.png'
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          price: 10,
          quantity: 10,
          image: '../../../assets/store-img.png'
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          price: 10,
          quantity: 10,
          image: '../../../assets/store-img.png'
        }
      ]
    
    } else {
      this.dataService.getStore(this.route.snapshot.params['slug'])
      .subscribe(
        (response: Response) => {
          const data = response.json();
          this.description = data['description'];
          this.title = data['title'];
          this.products = data['products'];
          this.comments = data['comments'];
          this.author = data['user'];
          this.imageUrl = 'http://localhost:8000'+data['image'];
          this.products.forEach((product) => {
            product['image'] = 'http://localhost:8000' + product['image'];
          });
          if (this.author == authService.decodeCurrentUser()['username']) {
            this.isOwner = true;
          } else {
            this.isOwner = false;
          }
        },
        (error) => console.log(error)
      );
    }
    
   }

  showOrders() {
    this.isOrderOn = !this.isOrderOn;
  }

  getOrder(order) {
    console.log(order);
    this.orders.push(order);
  }

  ngOnInit() {
  }

}
