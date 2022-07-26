import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { InformacionUptcComponent } from './components/informacion-uptc/informacion-uptc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CopyrightComponent,
    InformacionUptcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
