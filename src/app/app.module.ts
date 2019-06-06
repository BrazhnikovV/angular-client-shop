import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MainComponent } from './main/main.component';
import { PartnerComponent } from './partner/partner.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { AppRoutingModule } from './router/app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    LogoComponent,
    MainComponent,
    PartnerComponent,
    ProductsComponent,
    SliderComponent,
    TopmenuComponent,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
