import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class GetBookListService {

  

  constructor(private  http : HttpClient) { }


  getbook(){

    let url = 'http://localhost:8080/book/getbooklist';
    let  b = localStorage.getItem('Authorization');
   
     const httpOptions = {
       headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Authorization': b
       })
     };
     console.log("before cal");
     return this.http.get(url,httpOptions);
    }
}
