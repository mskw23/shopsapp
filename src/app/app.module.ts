import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from  '@agm/core'
import { Routes, RouterModule } from '@angular/router';

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
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: '', component: ShopsComponent },
  { path: ':slug', component: StoreComponent }
];

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
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpZ6vlTWO0gN6mHfufk0kYMwKQk_z8d1Q'
    }),
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
