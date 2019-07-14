import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedIn = false;
  constructor(private loginService : LoginService ,private routes :Router) { }
  toggleLogout(){
    this.loginService.logout().subscribe(
      res=>{
        this.loggedIn=true;
        },
        error =>{
          console.log(error);
        this.loggedIn=true;
        }
      
    );
    localStorage.clear();
    this.routes.navigate(['/login']);
  } 
 
  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res=>{
      this.loggedIn=false;
      },
      error =>{
        console.log(error);
      this.loggedIn=true;
      }
    );
  }

}
