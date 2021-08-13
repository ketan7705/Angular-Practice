import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  getOrders(){
    return[
        {orderId:1,orderDate:"10/02/2021",orderValue:4000,customerName:"Rushi"},
        {orderId:2,orderDate:"14/05/2021",orderValue:200,customerName:"Prasad"},
        {orderId:3,orderDate:"17/02/2021",orderValue:10000,customerName:"Ketan"},
        {orderId:4,orderDate:"13/08/2021",orderValue:3699,customerName:"Mayuresh"},
    ]
  }
  constructor() { }
}
