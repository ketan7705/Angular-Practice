import { Component, OnDestroy, OnInit } from "@angular/core";


@Component({
    selector: 'employee-app',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class Employeeomponent implements OnInit, OnDestroy {
    imageURL = "http://lorempixel.com/400/200"
    message: String = "Not Avialable"
    currentDate = new Date();
    name = "Ketan Shinde"
    email = "Ketan@gmail.com"
    address = {
        city: "Mumbai",
        state: "Maharashtra"
    }

    number1=""
    number2=""
    result=""
    constructor() {
        console.log("### Employe constructor is called")
        this.name = "Prasad Rane"
        this.email = "prasad@gmail.com"
    }

    addNumber(){
        this.result=this.number1+this.number2
    }
    changeEmployee() {
        this.name = "Pratik Rane"
        this.email = "pratik@gmail.com"
    }

    changeURL(url: string) {
        this.imageURL = url;
    }

    changeMessage() {
        this.message = " Welcome to Revature"
    }

    ngOnInit() {
        console.log("### Employe init is called")
        console.log(" the curreent time is : " + this.currentDate)
        if (this.currentDate.getHours() < 10) {
            this.message = "Good Morning"
        } else if (this.currentDate.getHours() > 10) {
            this.message = "Good Afternoon"
        } else if (this.currentDate.getHours() > 18) {
            this.message = "Good Evening"
        }
    }

    ngOnDestroy() {
        console.log("Destroy is called")
    }
}