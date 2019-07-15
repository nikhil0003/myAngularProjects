import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBookService {

  constructor(private http :HttpClient) { }
  private image : any [];
  getoneBook(id:Number){
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


  /*  getImageofBook(id:Number){
      let url = 'http://localhost:8080/book/image';
      let  b = localStorage.getItem('Authorization');
     
       const httpOptions = {
         headers: new HttpHeaders({
          'Content-Type':  'application/json',
           'Authorization': b
         })
       };
       console.log("before getImage GetBookService");
       return this.http.get(url,httpOptions);
      

    }*/

    getImageofBook(id:Number) {
      let url = 'http://localhost:8080/book/image';
      
      
      return new Promise((resolve, reject) => {
        
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        xhr.onreadystatechange = function() {
          if(xhr.readyState == 4) {
            if(xhr.status==200) {
              console.log(" successfully!");
             let  vararray   = xhr.response();
              if(vararray){
                var byteArray = new Uint8Array(vararray);
                
              }
              
             
            } else {
              reject(xhr.response);
            }
          }
        }
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Authorization", localStorage.getItem('Authorization'));
        xhr.send();
      });
}
}