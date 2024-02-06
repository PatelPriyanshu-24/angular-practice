// import { Component } from '@angular/core';
import { NgForm , FormControl,FormGroup } from '@angular/forms';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Demo';
//   display=""
//   // count=0;
//   // num: string=""
//   count=0;
//   show=true;
//   color :string = " "
  

//   onclick(val1:string,val2:string):void{
//     if(val1=="" || val2==""){
//       alert("error")
//     }
//     else{
//       console.log(val1,val2);
//     }
//   }
//   onmouse(name:string){
//     console.log(name);
    
//   }
//   getdata(val:string){
//     console.log(val)
//     this.display=val
//   }

//   // counter(num:string){
//   //   if(this.count<=-1){
//   //     alert("error")
//   //     this.count = 0;
//   //   }else{
//   //     num=='add'?this.count++:this.count--
//   //   }
    
//   // }
//   cou(num:string):void{
//     if(this.count<=-1){
//       alert("error")
//       this.count =0                       
//     }else{
//       num=='add'?this.count++:this.count--

//     }
//   }

//   oongetcolor(enteredColor: string) {
//     this.color = enteredColor.toLowerCase();
//     console.log('Color:', this.color); // Log the color to the console for debugging
//   }
// }

// app.component.ts
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string = '';
  // color=""
  userdetail = [{
    name:'akshay',
    email:'akshay@123gmail.com',
    phone : 6356134802,
    account:['facebook','instragram','linkdin']
  }]
  onget(val:string){
    this.color= val
  }
  

  // constructor(private cdr: ChangeDetectorRef) {}

  // ongetcolor(enteredColor: string) {
  //   this.color = enteredColor.toLowerCase();
  //   console.log('Color:', this.color);
  //   this.cdr.detectChanges(); // Explicitly trigger change detection
  // }
  // userdata:any={}
  // getData(ab:NgForm){
    
  //   this.userdata=ab
  //   console.log(this.userdata); 
  // }
  // display =true
  // ontoggle(){
  //   this.display=!this.display;
  // }

  // // data = 10 ;

  // // onclickrendom(){
  // //   this.data = Math.floor(Math.random()*10)
  // // }

  // userdetails = [
  //   {
  //     name:"aksahy",
  //     email:"akshay123@gmail.com",
  //     phone:"6356134802"
  //   },
  //   {
  //     name:"aksahy",
  //     email:"akshay123@gmail.com",
  //     phone:"6356134802"
  //   },
  //   {
  //     name:"aksahy",
  //     email:"akshay123@gmail.com",
  //     phone:"6356134802"
  //   }
  // ]

  // name:any="Akshay";
  // onclick(item:any){
  //   console.log(item);
    
  // }

  // onlogin(item:string){
  //   console.log(item);
    

  // }

  // relative form logic

  // loginform= new FormGroup({
  //   user: new FormControl(''),
  //   password: new FormControl('')
  // })
  

  // loginuser(){
  //   console.log(this.loginform.value)
  // }

}


