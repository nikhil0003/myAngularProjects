import { Injectable } from '@angular/core';
//import {Observable} from "rxjs/Observable";
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { 

  }
  
  sendCredential(username:String ,password:String){
    
    console.log("service call");
let url = 'http://localhost:8080/token';
let encodedCreditials= btoa(username+":"+password);
let basicHeader = "Basic "+encodedCreditials;
console.log("service before call");
console.log(basicHeader);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': basicHeader
  })
};
return this.http.get(url,httpOptions);
}

checkSession(){
  let url = 'http://localhost:8080/checkSession';
 let  b = localStorage.getItem('X-Auth-Token');
 console.log(b);
 const httpOptions = {
    headers: new HttpHeaders({
   "X-Auth-Token" : b
    })
    
  };
  console.log(httpOptions);

 
  return this.http.get(url,httpOptions);

}

  
}
