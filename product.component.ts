import { Component } from "@angular/core";


@Component({
    selector: 'product-app',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    productId = 15
    productName = "Nike"
    address = {
        city: "Mumbai",
        state: "Maharashtra"
    }
}