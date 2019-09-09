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
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import{AddBookService} from 'src/app/service/add-book.service';
import {UploadImageService} from 'src/app/service/upload-image.service';
import { BookListComponent ,DialogResultExampleDialog} from './components/book-list/book-list.component';
import{GetBookListService} from 'src/app/service/get-book-list.service';
import {MatTableModule} from '@angular/material/table';
import { ViewBookComponent } from './components/view-book/view-book.component';
import{GetBookService} from 'src/app/service/get-book.service';
import {MatListModule} from '@angular/material/list';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import {EditBookService} from 'src/app/service/edit-book.service';
import {MatDialogModule} from '@angular/material/dialog';
import {RemoveBookService} from 'src/app/service/remove-book.service';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
    DialogResultExampleDialog
  ],
  entryComponents: [DialogResultExampleDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [LoginService,
    CookieService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookService,
    EditBookService,
    RemoveBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
