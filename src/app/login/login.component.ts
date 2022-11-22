import { Component, OnInit } from '@angular/core';

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

//database
userDetails:any={
  1000:{acno:1000,username:"amal",password:1000,balance:1000},
  1001:{acno:1001,username:"john",password:1001,balance:1000},
  1002:{acno:1002,username:"maya",password:1002,balance:1000},

}


// functions/methods - user defined functions(4th executes)
  constructor() { }//1st execute
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
//   login(){
//     // alert('Login Clicked')
//     var acno=this.acno;
//     var pswd=this.pswd;
//     var userDetails=this.userDetails;

//     if(acno in userDetails){
//       if(pswd==userDetails[acno]['password']){
//         alert('Login Successful');
//       }
//       else{
//         alert('Invalid password');
//       }
//     }
//     else{
//       alert('Invalid user details');
//     }

// }
login(a:any,p:any){
  // alert('Login Clicked')
  var acno=a.value;
  var pswd=p.value;
  var userDetails=this.userDetails;

  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert('Login Successful');
    }
    else{
      alert('Invalid password');
    }
  }
  else{
    alert('Invalid user details');
  }

}

}
