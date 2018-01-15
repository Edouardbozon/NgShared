import { FormGroup } from '@angular/forms';
import { BaseComponent } from './base-component';

export abstract class FormComponent extends BaseComponent {
  form: FormGroup;
  submitted = false;

  get isValid() {
    return this.form.valid;
  }

  resetForm() {
    this.form.reset();
  }

  onSubmit() {
    this.submitted = true;
    if (!this.isValid) {
      return;
    }
  }
}
