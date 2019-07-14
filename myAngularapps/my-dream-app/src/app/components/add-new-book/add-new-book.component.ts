import { Component, OnInit } from '@angular/core';
import {Book} from 'src/app/models/book';
import {AddBookService} from 'src/app/service/add-book.service';
import{UploadImageService} from 'src/app/service/upload-image.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  private newBook  : Book = new Book();
  //private bookAdded : boolean;
  private bookAdded = false;
  
  constructor(private addBookService : AddBookService,private uploadImageService : UploadImageService) {
  }
  onsumbit( ){
    console.log(this.newBook.title);
    this.addBookService.sendbook(this.newBook).subscribe(
      res =>{
        console.log(JSON.stringify(res));
        var a =  JSON.parse(JSON.stringify(res));
        console.log(a.id);
         let strid = JSON.stringify(a.id);
         let inval = parseInt(strid);
        this.uploadImageService.upload(inval);
      },
      err =>{

      }
    );
    
  }

  ngOnInit() {
  }

}
