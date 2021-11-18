import {EventEmitter, NgModule, Output} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarreComponent } from './carre/carre.component';
import { LogoComponent } from './logo/logo.component';
import { LogoRedComponent } from './logo-red/logo-red.component';
import { LogoBlueComponent } from './logo-blue/logo-blue.component';
import { LogoYellowComponent } from './logo-yellow/logo-yellow.component';
import { LogoGreenComponent } from './logo-green/logo-green.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarreComponent,
    LogoComponent,
    LogoRedComponent,
    LogoBlueComponent,
    LogoYellowComponent,
    LogoGreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

