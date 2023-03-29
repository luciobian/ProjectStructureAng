import { Component, Input } from '@angular/core';
import { CardComponent } from '../card-component.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements CardComponent {
  @Input() data!: any
}
