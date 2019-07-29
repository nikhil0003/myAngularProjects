import { Component, OnInit } from '@angular/core';
import {Params,ActivatedRoute,Router} from '@angular/router';
import {Book} from 'src/app/models/book';
import {GetBookService} from 'src/app/service/get-book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  private book : Book = new Book();
  private bookId :number;
  constructor(private  getBookService : GetBookService,private route : ActivatedRoute ,private router : Router ) { }

  onSelect(book : Book){
    this.router.navigate(['/editBook',this.bookId]);
  }


  ngOnInit() {
    this.route.params.forEach(
      (params : Params) =>{
        this.bookId = Number.parseInt(params['id']);
      }
    );
    this.getBookService.getoneBook(this.bookId).subscribe(
      res =>{
          this.book = JSON.parse(JSON.stringify(res));
          console.log("suessful in getting book details");
      }
      ,err=>{
console.log(err);
      }
    );
  }

}
