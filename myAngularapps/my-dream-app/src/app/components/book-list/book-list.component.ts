import { Component, OnInit ,Inject} from '@angular/core';
import {Book} from 'src/app/models/book';
//import {LoginService} from 'src/app/service/login.service';
import { Router } from '@angular/router';
import {GetBookListService} from 'src/app/service/get-book-list.service';
//import {DataSource} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RemoveBookService} from 'src/app/service/remove-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit  {

  constructor(private getBookListService : GetBookListService, 
    private   router : Router,
    public   matDialog : MatDialog,
    private removeBookService : RemoveBookService
   ) { }

  private selectedBook :Book;
  private checkedBook : Book;
  private bookList : Book;
  private allChecked : boolean;
  private removeBookList : Book[] = new Array();

  openDialog(){
    let dialogRef = this.matDialog.open(DialogResultExampleDialog );
    dialogRef.afterClosed().subscribe(
      result =>{
        console.log(result);
        if(result == "yes"){
this.removeBookService.getoneBookForDelete(this.selectedBook.id).subscribe();
        }
      }
    );
    
  }
  removeSelectedBooks(){
    
  }
  onSelect(book : Book){
    this.selectedBook = book;
    //viewbook/:id
this.router.navigate(['/viewbook',this.selectedBook.id]);

  }
  ngOnInit() {
    this.getBookListService.getbook().subscribe(
      res =>{
        this.bookList = JSON.parse(JSON.stringify(res))
        
      },
      err =>{
        console.log(err);
      }
    );
  }

}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef : MatDialogRef<DialogResultExampleDialog> ) {}
}
