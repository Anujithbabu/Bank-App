import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  acno="";
  pswd="";
  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  //registration model
  registerForm = this.fb.group({//group
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  ngOnInit(): void {
  }
  register(){
    console.log(this.registerForm);
    
    // alert('register clicked')
console.log(this.registerForm.get('uname')?.errors);// valid or not


    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;
    if(this.registerForm.valid){
    const result=this.ds.register(acno,uname,pswd);
    if(result){
      alert('register Successful')
      this.router.navigateByUrl('')
    }
    else{
      alert('user already exist')
      this.router.navigateByUrl('register')

    }
  }
  else{
    alert("Invalid Form")
  }
}
}
