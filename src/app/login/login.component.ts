import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execute
//  class - collection of properties and functions
//properties/variables

aim="Your perfect banking partner";


account="Enter ur account here";

acno='';

pswd='';



// functions/methods - user defined functions(4th executes)
  constructor(private ds:DataService,private router:Router) { }//1st execute
// it automatically invokes when the object is created
// object initialization
  ngOnInit(): void {//2nd execute
    // its a life cycle hooks of angular
    // when the component created at same time it will initialize or authourised
  

  
  }
  acnoChange(event:any){
    console.log(event);
    this.acno=event.target.value;
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }
  login(){
    // alert('Login Clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;
    const result=this.ds.login(acno,pswd)
    if(result){
      alert('login successful');
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('login failed')
    }
  }
  // login(){
  //   // alert('Login Clicked')
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.ds.userDetails;


//     if(acno in userDetails){
//       if(pswd==userDetails[acno]['password']){
//         alert('Login Successful');
//         this.router.navigateByUrl('dashboard')
//       }
//       else{
//         alert('Invalid password');
//       }
//     }
//     else{
//       alert('Invalid user details');
//     }

// }

// login(a:any,p:any){
//   // alert('Login Clicked')
//   var acno=a.value;
//   var pswd=p.value;
//   var userDetails=this.userDetails;

//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert('Login Successful');
//     }
//     else{
//       alert('Invalid password');
//     }
//   }
//   else{
//     alert('Invalid user details');
//   }

// }

}
