import { Component, input } from '@angular/core';
import { CommonFoodCardComponent } from '../common-food-card/common-food-card.component';

@Component({
  selector: 'app-addsuplier',
  standalone: true,
  imports: [CommonFoodCardComponent],
  templateUrl: './addsuplier.component.html',
  styleUrl: './addsuplier.component.scss'
})
export class AddsuplierComponent {

}
