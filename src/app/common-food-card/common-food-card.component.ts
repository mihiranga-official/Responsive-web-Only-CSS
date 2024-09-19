import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-common-food-card',
  standalone: true,
  imports: [],
  templateUrl: './common-food-card.component.html',
  styleUrl: './common-food-card.component.scss'
})
export class CommonFoodCardComponent {
  @Input() imageSrc: string = '';   
  @Input() foodTitle: string = '';  
  @Input() price: number = 0;   
}
