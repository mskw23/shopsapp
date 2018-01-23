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

  detailFile: File;
  productFiles: [File];


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
  isOrder: boolean = false;
  isOwner: boolean;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute, private authService: AuthService) {
    this.isAuthenticated = authService.isAuthenticated();
    if(router.url == '/shop') {
      this.isOwner = true;
      this.isOrder = false;
      this.author = authService.decodeCurrentUser()['username']
      this.imageUrl = '../../assets/store-img.png'
      this.title = "SUPER SHOP"
      this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      this.products = [
        {
          title: "Fish",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          price: 10,
          quantity: 10,
          image: '../../../assets/store-img.png'
        },
        {
          title: "Fish",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          price: 10,
          quantity: 10,
          image: '../../../assets/store-img.png'
        },
        {
          title: "Fish",
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
          if (this.isAuthenticated) {
            this.isOrder = true;
          } else {
            this.isOrder = false;
          }
        },
        (error) => console.log(error)
      );
    }
    
   }

  showOrders() {
    this.isOrderOn = !this.isOrderOn;
  }

  showOwner() {
    this.isOwnerOn = !this.isOwnerOn;
  }

  getOrder(order) {
    console.log(order);
    this.orders.push(order);
  }

  deleteProduct(i: number) {
    console.log(i);
    this.products.splice(i, 1);
  }

  readDetailsUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.detailFile = reader.result.split(',')[1];
        this.imageUrl = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  readProductUrl(event:any, i:number) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.productFiles.push(reader.result.split(',')[1]);
        this.products[i]['image'] = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addNewProduct() {
    this.products.push({
      title: "Fish",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: 10,
      quantity: 10,
      image: '../../../assets/store-img.png'
    })
  }

  submitNewShop() {
    console.log(this.productFiles);
    console.log(this.detailFile);
    let productsData = []
    this.products.forEach((product) => {
      productsData.push({

      });
    })

    let data = {
      title: this.title,
      description: this.description,
      image: this.detailFile
    }
    console.log(data);
    this.dataService.addShop(data).subscribe(
        (response: Response) => {
            this.router.navigate(['/']);
        }
    )
  }

  ngOnInit() {
  }

}
