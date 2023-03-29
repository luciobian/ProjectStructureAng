import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/core/home.service';
import { CardItem } from 'src/app/shared/card-component-item';
import { CardComponent } from 'src/app/shared/card-component.interface';
import { CardDirective } from 'src/app/shared/card-helpers/card.directive';

// import { PostCardComponent } from 'src/app/shared/post-card/post-card.component';
// import { ProductCardComponent } from 'src/app/shared/product-card/product-card.component';
// import { QuoteCardComponent } from 'src/app/shared/quote-card/quote-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items!: CardItem[]
  @ViewChild(CardDirective, { static: true }) cardDirective!: CardDirective;

  constructor(private _homeService: HomeService) {
  }

  ngOnInit(): void {
    this.items = this._homeService.getItems();
    this.loadCards()
  }

  loadCards() {
    this.items.forEach((cardCompItem) => {
      let component: any = cardCompItem.component
      const viewContainerRef = this.cardDirective.viewContainerRef;

      const componentRef: ComponentRef<any> = viewContainerRef.createComponent<CardComponent>(new component().constructor);
      componentRef.instance.data = cardCompItem.data;
    });
  }

}
