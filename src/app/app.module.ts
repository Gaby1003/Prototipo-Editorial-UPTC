import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CarouselComponent } from './components/carousel-news/carousel.component';
import { InformacionUptcComponent } from './components/informacion-uptc/informacion-uptc.component';
import { BannerInstiComponent } from './components/banner-insti/banner-insti.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CopyrightComponent,
    BannerInstiComponent,
    InformacionUptcComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

