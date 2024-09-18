import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addorder',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.scss'
})
export class AddorderComponent {


  newOrder={
    // orderId:'',
    orderName:'',
    customername:'',
    customerTele:'',
    customerAddress:'',
  }

items:Array<{orderName:string,
  customername:string,customerTele:string,customerAddress:string}>=[]

addItem(){
  if(this.newOrder.orderName &&
    this.newOrder.customername && this.newOrder.customerTele &&
    this.newOrder.customerAddress 
  )
  {

    this.items.push({
     // orderId:this.newOrder.orderId,
      orderName:this.newOrder.orderName,
      customername :this.newOrder.customername,
      customerTele:this.newOrder.customerTele,
      customerAddress:this.newOrder.customerAddress

    });

    //for clear after submitting
    this.newOrder={orderName:'',customername:'',customerTele:'',customerAddress:''}
   
  }
}
removeItem(){
  this.items.pop()
}
}
