import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-addorder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,NgSelectModule],
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.scss'
})
export class AddorderComponent {


  newOrder = {
    orderId: '',
    orderName: '',
    price: 0,
   // customername: '',
   // customerTele: '',
   discountPrice: '',
    qty:0,
    subTotal:''
  }

  items: Array<{
    orderId: string
    orderName: string,
    price: number,
   // customername: string,
    //customerTele: string,
    discountPrice: string,
    qty:number
    subTotal:string
 
  }> = []

  addItem() {
    if ( this.newOrder.price && this.newOrder.orderName && this.newOrder.discountPrice) {
      const newId = this.items.length + 1;


      this.items.push({
        orderId: newId.toString(),
        price: this.newOrder.price,
        qty:this.newOrder.qty,
        subTotal:this.newOrder.subTotal,
        orderName: this.newOrder.orderName,
        //customername: this.newOrder.customername,
       // customerTele: this.newOrder.customerTele,
        discountPrice: this.newOrder.discountPrice,
      
      });

      //for clear after submitting
      this.newOrder = { orderId: '', orderName: '', price: 0,qty:0, subTotal:'',  discountPrice: '' }

    }
  }

  //when click remoove button in the row 
  removeItem(id: string) {
    this.items = this.items.filter(item => item.orderId !== id)
  }

  calculateSum(){

  }
}
