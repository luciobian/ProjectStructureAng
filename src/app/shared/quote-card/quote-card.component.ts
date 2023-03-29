import { Component, Input } from '@angular/core';
import { CardComponent } from '../card-component.interface';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements CardComponent {
  @Input() data!: any

}
