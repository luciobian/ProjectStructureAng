import { from, Observable } from 'rxjs';
import { FormModel } from '../../../shared/form-helpers/form-helpers.model';

export class QuestionnaireService {

  constructor() { }

  getPersonalDetailsForm(): Observable<FormModel> {
    return from(fetch('assets/personal-info.json').then((r) => r.json()))
  }

  getAddressForm(): Observable<FormModel> {
    return from(fetch('assets/address.json').then((r) => r.json()))
  }
}
