import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuestionnaireModule { }
