import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddOrderService } from './add-order.service';

@Component({
  selector: 'app-addorder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule,HttpClientModule],
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.scss'
})
export class AddorderComponent implements OnInit {
 
  



 sharps: any[] = [];

  constructor(private logs: AddOrderService) {}

  ngOnInit(): void {
    this.logs.getAllOrderCompData().subscribe({
      next: res => {
        this.sharps = res;
        console.log("AbS", this.sharps);
      },
      error: err => console.log(err)
    });
  }





  newOrder = {
    orderId: '',
    orderName: '',
    price: 0,
    discountPrice: 0,
    qty: 0,
    subTotal: 0,
    disCountAmount: 0,

  }

  items: Array<{
    orderId: string
    orderName: string,
    price: number,
    discountPrice: number,
    qty: number
    subTotal: number,
    disCountAmount: number,

  }> = []

 
 

  addItem() {
    if (this.newOrder.price && this.newOrder.orderName && this.newOrder.discountPrice ) {
      const newId = this.items.length + 1;
      this.items.push({
        orderId: newId.toString(),
        price: this.newOrder.price,
        qty: this.newOrder.qty,
        subTotal: this.newOrder.subTotal,
        orderName: this.newOrder.orderName,
        discountPrice: this.newOrder.discountPrice,
        disCountAmount: this.newOrder.disCountAmount,


      });
   
      //form clear after submitting
      this.newOrder = { orderId: '', orderName: '', price: 0, qty: 0, subTotal: 0, discountPrice: 0, disCountAmount: 0}

    }
  }



 addItemFromCard(orderName: string, price: number, qty: number, discountPrice: number) {
  const newId = this.items.length + 1;
  const subTotal = price * qty; 
  const disCountAmount = (subTotal * discountPrice) / 100; 

  this.items.push({
    orderId: newId.toString(),
    orderName: orderName,
    price: price,
    qty: qty,
    discountPrice: discountPrice,
    subTotal: subTotal,
    disCountAmount: disCountAmount,
  });
}



  //when click remoove button in the row 
  removeItem(id: string) {
    this.items = this.items.filter(item => item.orderId !== id)
  }

  calculateTotal() {
    return this.items.reduce((acc, item) => acc + (item.price * item.qty), 0)
  }

  calculateDiscount() {
    return this.items.reduce((tc, item) => {

      const disCountAmount = (item.price * item.discountPrice / 100);
      return tc + disCountAmount  *item.qty;
    }, 0);
  }

  totalPrice() {
    return this.items.reduce((tot, item) => {
      const totalPrices = (item.price - this.calculateDiscount());
      return tot + totalPrices
    }, 0)
  }
}
