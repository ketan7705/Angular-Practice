import { Component } from "@angular/core";


@Component({
    selector: 'app-root',
    template: `<h1> Hello,Welcome to Revature</h1>
                <customer-app></customer-app>
                <app-customer-details></app-customer-details>
                <app-customer-list></app-customer-list>
                <employee-app></employee-app> 
                <product-app></product-app>
                <message-app></message-app>
                <app-hosptial></app-hosptial>
                `
})

export class AppComponent {

}