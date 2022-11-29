import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  // deposit properties
  acno="";
  pswd="";
  amount="";

  // withdraw properties
  acno1="";
  pswd1="";
  amount1="";

  user="";
  constructor(private ds:DataService) { 
    this.user=this.ds.currentuser;
    
  }

  ngOnInit(): void {
  }
  deposit(){
    var acno= this.acno;
    var pswd = this.pswd;
    var amount = this.amount;

    const result = this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(`${amount} is credicted...available balance is ${result}`)
    }
  }
  withdraw(){
    var acno=this.acno1;
    var pswd=this.pswd1;
    var amount=this.amount1;

    const result = this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(`${amount} is debited...available balance is ${result}`)
    }
  }

}
