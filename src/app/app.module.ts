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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

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
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
   
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

