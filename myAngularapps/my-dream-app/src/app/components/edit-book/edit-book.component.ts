import { Component, OnInit } from '@angular/core';
import{UploadImageService} from 'src/app/service/upload-image.service';
import {Params,ActivatedRoute,Router} from '@angular/router';
import {Book} from 'src/app/models/book';
import {GetBookService} from 'src/app/service/get-book.service';
import {EditBookService} from 'src/app/service/edit-book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  private bookid :number;
  private book : Book = new Book();
  private bookUpdated : boolean = false;
  constructor(
    private  uploadImageService : UploadImageService,
    private  Route : ActivatedRoute,
    private router : Router,
    private getBookService : GetBookService,
    private editBookService : EditBookService
  ) { }

  onsumbit(){
    this.editBookService.editBook(this.book).subscribe(
      res =>{
        console.log(JSON.stringify(res));
        var a =  JSON.parse(JSON.stringify(res));
         let strid = JSON.stringify(a.id);
         let inval = parseInt(strid);
        this.uploadImageService.modify(inval);
        this.bookUpdated = false;
      }
      ,err =>{
        console.log("editBooks service in edit book component failed");
        console.log(err);
        this.bookUpdated = true;
      }
    );

    
  }
  ngOnInit() {
    this.Route.params.forEach(
      (params : Params ) =>{
       this.bookid = Number.parseInt(params['id']);
      }
    );

    this.getBookService.getoneBook(this.bookid).subscribe(
      res =>{
        this.book = JSON.parse(JSON.stringify(res));
        this.bookUpdated = true;
      },err =>{
        console.log("getonebook in edit book component failed");
        console.log(err);
      }
    );
  }

}
