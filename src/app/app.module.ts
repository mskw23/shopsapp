import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopsComponent } from './shops/shops.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shops/shop/shop.component';
import { ButtonComponent } from './button/button.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { LoginRegisterComponent } from './login-register/login-register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopsComponent,
    FooterComponent,
    ShopComponent,
    ButtonComponent,
    ThumbnailComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
