import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders:any;
  
  constructor(private http:HttpClient){ }
  
  ngOnInit() {
    let response = this.http.get("http://localhost:8081/order/getAll");
    response.subscribe((data)=>this.orders=data);
  }
}
