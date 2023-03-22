import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from 'src/app/features/questionnaire/service/questionnaire.service';
import { Address, Personal } from 'src/app/shared/form-helpers/form-helpers.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  providers: [QuestionnaireService]
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
  }

  loadPersonalDataJson(): void {
    this._questionnaireService.getPersonalDetailsForm().subscribe((r) => {
      this.personalDataJson = r;
      this.buildPersonalForm(this.personalDataJson)
    })
  }

  loadAddressJson(): void {
    this._questionnaireService.getAddressForm().subscribe((r) => {
      this.addressJson = r
      this.buildAddressForm(this.addressJson)
    })
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
