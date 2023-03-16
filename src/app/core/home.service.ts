import { Injectable } from '@angular/core';
import { CardItem } from '../shared/card-component-item';
import { PostCardComponent } from '../shared/post-card/post-card.component';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { QuoteCardComponent } from '../shared/quote-card/quote-card.component';

@Injectable()
export class HomeService {
  public getItems(): CardItem[] {
    return [
      new CardItem(ProductCardComponent, {
        title: 'Apple MacBook Pro 13"',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        image:
          'https://i.ebayimg.com/images/g/N64AAOSwpClj-NNW/s-l500.jpg',
        price: 29,
      }),
      new CardItem(PostCardComponent, {
        title: 'Best indoor plants',
        author: 'Dayana Jabif',
        description: `Discover the best 10 indoor plants to add color and interest to every room with our easy-to-follow guide. 
                Full of expert tips as to which house plants will survive best in your home, 
                you can banish any worries of green fingered failures for good.`,
        publishedDate: new Date('05-20-2022'),
      }),
      new CardItem(QuoteCardComponent, {
        author: 'Marcus Tullius Cicero',
        description: `If you have a garden and a library, you have everything you need.`,
      }),
      new CardItem(ProductCardComponent, {
        title: 'Grey Pot',
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        image:
          'https://i.ebayimg.com/images/g/dkQAAOSwlPRjiNbR/s-l500.png',
        price: 22,
      }),
      new CardItem(QuoteCardComponent, {
        author: 'Walter Hagen',
        description: `You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.`,
      }),
      new CardItem(QuoteCardComponent, {
        author: ' Audrey Hepburn',
        description: `To plant a garden is to believe in tomorrow.`,
      }),
    ];
  }
}