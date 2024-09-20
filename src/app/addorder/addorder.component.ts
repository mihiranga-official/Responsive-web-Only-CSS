import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addorder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.scss'
})
export class AddorderComponent {


  newOrder = {
    orderId: '',
    orderName: '',
    customername: '',
    customerTele: '',
    customerAddress: '',
  }

  items: Array<{
    orderId: string
    orderName: string,
    customername: string, customerTele: string, customerAddress: string
  }> = []

  addItem() {
    if (this.newOrder.orderName && this.newOrder.customername && this.newOrder.customerTele && this.newOrder.customerAddress) {
      const newId = this.items.length + 1;


      this.items.push({
        orderId: newId.toString(),
        orderName: this.newOrder.orderName,
        customername: this.newOrder.customername,
        customerTele: this.newOrder.customerTele,
        customerAddress: this.newOrder.customerAddress

      });

      //for clear after submitting
      this.newOrder = { orderId: '', orderName: '', customername: '', customerTele: '', customerAddress: '' }

    }
  }

  //when click remoove button in the row 
  removeItem(id: string) {
    this.items = this.items.filter(item => item.orderId !== id)
  }
}
