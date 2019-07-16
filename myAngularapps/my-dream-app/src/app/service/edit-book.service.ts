import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Book} from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class EditBookService {

  constructor(private http : HttpClient) { }

  editBook(book : Book){
    let url = 'http://localhost:8080/book/update';
    let  b = localStorage.getItem('Authorization');
   
     const httpOptions = {
       headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Authorization': b
       })
     };
     console.log("before edit bookservice cal");
     return this.http.post(url,JSON.stringify(book),httpOptions);
  }
}
