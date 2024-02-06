import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userdetail:any[]=[]
  onAdd(item:string,item1:string){
    this.userdetail.push({id:this.userdetail.length,name:item,email:item1})
    console.log(this.userdetail)
  }
@Input() 
item:{name:string,email:string,phone:string}={name:"",email:"",phone:""};
}
