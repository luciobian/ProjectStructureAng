import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { CardDirective } from './card-helpers/card.directive';

@NgModule({
  declarations: [
    NavBarComponent,
    GreetingPipe,
    ProductCardComponent,
    QuoteCardComponent,
    PostCardComponent,
    CardDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule,
  ],
  exports: [
    GreetingPipe,
    NavBarComponent,
    FormsModule,
    ReactiveFormsModule,
    ProductCardComponent,
    QuoteCardComponent,
    PostCardComponent,
    CardDirective
  ]
})
export class SharedModule { }
