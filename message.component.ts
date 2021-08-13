import { Component } from "@angular/core";


@Component({
    selector: 'message-app',
    template: `<h1> Message App</h1>
                <h1> Message is : {{message}}
                <button (click)="changeMessage()">Click</button>
                <p>{{75 | currency}}</p>
                <!-- output '$75.00' --> 

                <p>A: {{ 75 | currency:'CAD'}}</p>
                <!-- output 'CA$75.00' -->

                <p>A: {{ 75 | currency:'EUR'}}</p>
                <p>A: {{ 75 | currency:'GBP'}}</p>
                <!-- output 'CA$75.00' -->

                <p>A: {{ 75 | currency:'INR':'code'}}</p></h1>
                `
})

export class MessageComponent {
    message: String = "Not Avialable"
    currentDate = new Date();
    constructor() {
        this.message = "Default"

        console.log(" the curreent time is : " + this.currentDate)
        if (this.currentDate.getHours() < 10) {
            this.message = "Good Morning"
        } else if (this.currentDate.getHours() > 10) {
            this.message = "Good Afternoon"
        } else if (this.currentDate.getHours() > 18) {
            this.message = "Good Evening"
        }

    }
    changeMessage() {
        this.message = " Welcome to Revature"
    }
}