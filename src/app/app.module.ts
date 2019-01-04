import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { SliderComponent } from './slider/slider.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    LogoComponent,
    TopmenuComponent,
    SliderComponent,
    AdvantagesComponent,
    PartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(), // Add Bootstrap module here.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
