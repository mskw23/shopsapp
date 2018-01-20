import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from  '@agm/core'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopsComponent } from './shops/shops.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shops/shop/shop.component';
import { ButtonComponent } from './button/button.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './store/details/details.component';
import { ProductsComponent } from './store/products/products.component';
import { ProductComponent } from './store/products/product/product.component';
import { MapComponent } from './store/map/map.component';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { AuthGuardService } from './auth-guard.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { OrderButtonComponent } from './store/order-button/order-button.component';
import { OwnerButtonComponent } from './store/owner-button/owner-button.component';

const appRoutes: Routes = [
  { path: '', component: ShopsComponent },
  { path: 'shop/:slug', component: StoreComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'register', component: LoginRegisterComponent }
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopsComponent,
    FooterComponent,
    ShopComponent,
    ButtonComponent,
    ThumbnailComponent,
    LoginRegisterComponent,
    StoreComponent,
    DetailsComponent,
    ProductsComponent,
    ProductComponent,
    MapComponent,
    OrderButtonComponent,
    OwnerButtonComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpZ6vlTWO0gN6mHfufk0kYMwKQk_z8d1Q'
    }),
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuardService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
