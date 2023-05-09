import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments:any;
  
  constructor(private http:HttpClient){ }
  
  ngOnInit() {
    let response = this.http.get("http://localhost:8081/order/getAll");
    response.subscribe((data)=>this.payments=data);
  }

}
