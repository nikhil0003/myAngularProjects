import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/navbar/login/login.component';
import{AddNewBookComponent} from 'src/app/components/add-new-book/add-new-book.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  }, {
    path: 'login',
    component: LoginComponent
  },{
    path:'addnewbook',
    component:AddNewBookComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }