import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './navbar/login/login.component';
import {LoginService} from './service/login.service';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
//import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    MatInputModule
  ],
  providers: [LoginService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
