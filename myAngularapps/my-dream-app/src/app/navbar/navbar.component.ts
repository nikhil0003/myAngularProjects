import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/service/login.service';
import{LoginComponent} from 'src/app/navbar/login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedIn = false;
  constructor(private loginService : LoginService ,private  loginComponent :LoginComponent) { }
  toggle(){
    this.loggedIn=false;
    this.loginComponent.toggleLogout();
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
