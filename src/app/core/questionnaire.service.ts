import { Injectable } from '@angular/core';
import { Address, Personal } from '../shared/form-helpers/form-helpers.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor() { }

  getPersonalDetailsForm(): { controls: Personal[] } {
    return {
      controls: [
        {
          "name": "firstName",
          "label": "First name:",
          "value": "",
          "type": "text"
        },
        {
          "name": "lastName",
          "label": "Last name:",
          "value": "",
          "type": "text"
        },
        {
          "name": "age",
          "label": "Age",
          "value": "",
          "type": "number"
        },
        {
          "name": "comments",
          "label": "Comments",
          "value": "",
          "type": "textarea"
        },
        {
          "name": "agreeTerms",
          "label": "Accepts terms and conditions",
          "value": "false",
          "type": "checkbox"
        }
      ]
    }
  }

  getAddressForm(): { controls: Address[] } {
    return {
      controls: [
        {
          "name": "address1",
          "label": "Address line 1:",
          "value": "",
          "type": "text"
        },
        {
          "name": "address2",
          "label": "Address line 2:",
          "value": "",
          "type": "text"
        },
        {
          "name": "city",
          "label": "City:",
          "value": "",
          "type": "text"
        },
        {
          "name": "country",
          "label": "Country:",
          "value": "",
          "type": "select",
          "options": ["Uruguay", "Argentina", "Peru"]
        },
        {
          "name": "zipcode",
          "label": "ZIP",
          "value": "",
          "type": "number"
        }
      ]
    }
  }
}
