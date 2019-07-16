import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/service/login.service';
//import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username':'','password':''};
  private loggedIn = false;
  constructor(private loginService : LoginService ) { }
  
  onsumbit(){
   this.loginService.sendCredential(this.credential.username,this.credential.password).subscribe(
     res => {
      console.log(JSON.stringify(res));
      this.loggedIn=true;
      
   var a =  JSON.parse(JSON.stringify(res));
    console.log(a);
      localStorage.setItem("X-Auth-Token",a.token);
     location.reload();
     
      
   },
   error=>{
    console.log(error);
   }
   );
  }
  ngOnInit() {
  this.loginService.checkSession().subscribe(
    res=>{
    this.loggedIn=true;
    },
    error =>{
      console.log(error);
    this.loggedIn=false;
    }
  );
  }

}
