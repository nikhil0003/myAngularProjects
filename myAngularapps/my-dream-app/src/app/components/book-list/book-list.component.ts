import { Component, OnInit } from '@angular/core';
import {Book} from 'src/app/models/book';
//import {LoginService} from 'src/app/service/login.service';
import { Router } from '@angular/router';
import {GetBookListService} from 'src/app/service/get-book-list.service';
//import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit  {

  constructor(private getBookListService : GetBookListService, private   router : Router) { }

  private selectedBook :Book;
  private checkedBook : Book;
  private bookList : Book;
  private allChecked : boolean;
  private removeBookList : Book[] = new Array();
  
  onSelect(book : Book){
    this.selectedBook = book;
    //viewbook/:id
this.router.navigate(['/viewbook',this.selectedBook.id]);

  }
  ngOnInit() {
    this.getBookListService.getbook().subscribe(
      res =>{
        console.log(JSON.stringify(res));
        this.bookList = JSON.parse(JSON.stringify(res))
        
      },
      err =>{
        console.log(err);
      }
    );
  }

}
