import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/navbar/login/login.component';
import{AddNewBookComponent} from 'src/app/components/add-new-book/add-new-book.component';
import {BookListComponent} from  'src/app/components/book-list/book-list.component';
import {ViewBookComponent} from 'src/app/components/view-book/view-book.component';
const routes: Routes = [
  {
    path : '',
		redirectTo: '/login',
		pathMatch: 'full'
  }, {
    path: "login",
		component: LoginComponent
  },{
    path:"addnewbook",
    component:AddNewBookComponent
  },{
    path:"viewbooklist",
    component:BookListComponent
  },{
    path:"viewbook/:id",
    component:ViewBookComponent
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }