import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-print-recipt',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './print-recipt.component.html',
  styleUrl: './print-recipt.component.scss'
})
export class PrintReciptComponent {


  
  isModalOpen = false
  openModal() {
    this.isModalOpen = true
  }
  closeModal() {
    this.isModalOpen = false
  }
  
}
