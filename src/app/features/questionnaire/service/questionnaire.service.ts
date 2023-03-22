import { from, Observable } from 'rxjs';
import { Address, Personal } from '../../../shared/form-helpers/form-helpers.model';

export class QuestionnaireService {

  constructor() { }

  getPersonalDetailsForm(): Observable<{ controls: Personal[] }> {
    return from(fetch('assets/personal-info.json').then((r) => r.json()))
  }

  getAddressForm(): Observable<{ controls: Address[] }> {
    return from(fetch('assets/address.json').then((r) => r.json()))
  }
}
