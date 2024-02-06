import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';



@NgModule({
  declarations: [
    LoginComponent,
    TodolistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    TodolistComponent
  ]
})
export class UserAuthModule { }
