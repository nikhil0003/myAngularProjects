import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
//private cookieService :CookieService
  constructor(private http : HttpClient) { 

  }
  
  sendCredential(username:String ,password:String){
let url = 'http://localhost:8080/token';
let encodedCreditials= btoa(username+":"+password);
let basicHeader = "Basic "+encodedCreditials;
console.log("service before call");
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': basicHeader
  })
};

localStorage.setItem("Authorization",basicHeader);
return this.http.get(url,httpOptions);
}

checkSession(){
  let url = 'http://localhost:8080/checkSession';
 let  b = localStorage.getItem('Authorization');
 
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': b
    })
  };
  return this.http.get(url,httpOptions);
 }
logout(){
  let url = 'http://localhost:8080/checkSession';
  let  b = localStorage.getItem('Authorization');
 
   const httpOptions = {
     headers: new HttpHeaders({
       'Authorization': b
     })
   };
   return this.http.get(url,httpOptions);
  } 
}
