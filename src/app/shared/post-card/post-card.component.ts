import { Component, Input } from '@angular/core';
import { CardComponent } from '../card-component.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements CardComponent {
  @Input() data!: any
}
