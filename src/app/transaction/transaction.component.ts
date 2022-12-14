import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno:any;//to hold the current user

  transaction:any;// to hold the  transaction

  constructor(private ds:DataService) {
    this.acno=this.ds.currentAcno;
    this.transaction=this.ds.getTransaction(this.acno);
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
