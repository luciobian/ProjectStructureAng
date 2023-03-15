import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from 'src/app/core/questionnaire.service';
import { Address, Personal } from 'src/app/shared/form-helpers/form-helpers.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  personalDataJson!: { controls: Personal[] };
  addressJson!: { controls: Address[] };
  addressForm!: FormGroup;
  personalDataForm!: FormGroup;

  constructor(private _questionnaireService: QuestionnaireService, private formBuilder: FormBuilder) {
    this.addressForm = this.formBuilder.group({});
    this.personalDataForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.loadAddressJson()
    this.loadPersonalDataJson()
    this.buildPersonalForm(this.personalDataJson)
    this.buildAddressForm(this.addressJson)
    console.log(this.personalDataJson, this.addressJson);
  }

  loadPersonalDataJson(): void {
    this.personalDataJson = this._questionnaireService.getPersonalDetailsForm()
  }

  loadAddressJson(): void {
    this.addressJson = this._questionnaireService.getAddressForm()
  }

  private buildPersonalForm(formControls: { controls: Personal[] }): void {
    formControls.controls.forEach(control => {
      const validators = control.type === 'checkbox' ? null : Validators.required;
      const controlValue = control.type === 'checkbox' ? false : control.value;
      this.personalDataForm.addControl(control.name, this.formBuilder.control(controlValue, validators));
    });
  }

  private buildAddressForm(formControls: { controls: Address[] }): void {
    formControls.controls.forEach(control => {
      const validators = control.type === 'checkbox' ? null : Validators.required;
      const controlValue = control.type === 'checkbox' ? false : control.value;
      this.addressForm.addControl(control.name, this.formBuilder.control(controlValue, validators));
    });
  }

  onSubmit(): void {
    console.log(`test`);
  }
}
