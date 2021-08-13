import { Component } from "@angular/core";
import { CustomerService } from "./customer.service";
import { Customer } from "./model/customer";
import { Order } from "./model/order";
import { OrderService } from "./order.service";


@Component({
    selector: 'customer-app',
    template: `<h1 appText> Customer App</h1>
                <div *ngIf="showCustomer" appText>
                <ul>
                    <li *ngFor = "let cust of customers">
                    
                        {{cust.customerId}} - {{cust.customerName}} - {{cust.billAmount}}
                    
                    </li>
                </ul>
                </div>
                <button (click)="showHideCustomer()">{{ showCustomer ? "Hide Customers" : "Show Customers"}}</button>
                <div>
                <h1>Order Details</h1>
                <ul>
                    <li *ngFor = "let order of orders">
                    
                        {{order.orderId}} - {{order.orderDate}} - {{order.orderValue}} - {{order.customerName}}
                    
                    </li>
                </ul>
                </div>
                `
})

export class CustomerComponent {

    public showCustomer= true;
    customers : Customer[] =[]
    orders : Order[] =[]

 
    constructor(public customerService:CustomerService,public orderService:OrderService){

    }
    ngOnInit(){
        this.customers = this.customerService.getCustomers();
        this.orders=this.orderService.getOrders();
    }
    showHideCustomer(){
        if(this.showCustomer == true)
            this.showCustomer = false
        else
            this.showCustomer = true
    }
}