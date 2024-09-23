import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-addorder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule],
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.scss'
})
export class AddorderComponent {


  newOrder = {
    orderId: '',
    orderName: '',
    price: 0,

    discountPrice: 0,
    qty: 0,
    subTotal: 0
  }

  items: Array<{
    orderId: string
    orderName: string,
    price: number,
    discountPrice: number,
    qty: number
    subTotal: number

  }> = []

  addItem() {
    if (this.newOrder.price && this.newOrder.orderName && this.newOrder.discountPrice) {
      const newId = this.items.length + 1;


      this.items.push({
        orderId: newId.toString(),
        price: this.newOrder.price,
        qty: this.newOrder.qty,
        subTotal: this.newOrder.subTotal,
        orderName: this.newOrder.orderName,
        //customername: this.newOrder.customername,
        // customerTele: this.newOrder.customerTele,
        discountPrice: this.newOrder.discountPrice,

      });

      //for clear after submitting
      this.newOrder = { orderId: '', orderName: '', price: 0, qty: 0, subTotal: 0, discountPrice: 0 }

    }
  }

  //when click remoove button in the row 
  removeItem(id: string) {
    this.items = this.items.filter(item => item.orderId !== id)
  }

  calculateTotal() {
    return this.items.reduce((acc, item) => acc + (item.price * item.qty), 0)
  }

  // calculateDiscount() {
  //   return this.items.reduce((tc, item) => {

  //     const discountAmount = (item.price / item.discountPrice /100) ;
  //     return tc + discountAmount;
  //   }, 0);
  // }
}
