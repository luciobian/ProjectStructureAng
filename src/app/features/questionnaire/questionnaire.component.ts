import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from 'src/app/features/questionnaire/service/questionnaire.service';
import { FormModel } from 'src/app/shared/form-helpers/form-helpers.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  providers: [QuestionnaireService]
})
export class QuestionnaireComponent implements OnInit {
  personalDataJson!: FormModel;
  addressJson!: FormModel;
  combinedJson!: FormModel[];
  dynamicForm!: FormGroup;

  constructor(private _questionnaireService: QuestionnaireService, private formBuilder: FormBuilder) {
    this.dynamicForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.loadAddressJson()
    this.loadPersonalDataJson()
  }

  arrayData() {
    return [this.personalDataJson, this.addressJson]
  }

  loadPersonalDataJson(): void {
    this._questionnaireService.getPersonalDetailsForm().subscribe((r) => {
      this.personalDataJson = r;
      this.buildForm(this.personalDataJson)
    })
  }

  loadAddressJson(): void {
    this._questionnaireService.getAddressForm().subscribe((r) => {
      this.addressJson = r
      this.buildForm(this.addressJson)
    })
  }

  private buildForm(formControls: FormModel): void {
    formControls.controls.forEach(control => {
      const validators = control.type === 'checkbox' ? null : Validators.required;
      const controlValue = control.type === 'checkbox' ? false : control.value;
      this.dynamicForm.addControl(control.name, this.formBuilder.control(controlValue, validators));
    });
  }

  onSubmit(): void {
    console.log(`test`);
  }
}
