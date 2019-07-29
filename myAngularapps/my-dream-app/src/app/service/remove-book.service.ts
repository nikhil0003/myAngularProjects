import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoveBookService {

  constructor(private http :HttpClient) { }

  getoneBookForDelete(id:Number){
    let url = 'http://localhost:8080/book/'+id;
    let  b = localStorage.getItem('Authorization');
   
     const httpOptions = {
       headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Authorization': b
       })
     };
     console.log("before getoneBook GetBookService");
     return this.http.get(url,httpOptions);
    }
}
