import { IFormComponent } from '../interfaces/form-component.interface';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from './base-component.class';

export class FormComponent extends BaseComponent implements IFormComponent {
    form: FormGroup;
    formConfirmation: FormGroup;
    formSubmitAttempt: Boolean = false;
    errorMsg: String = null;

    initForm(): void {
        throw new Error('Method not implemented.');
        // this.dissmissError();
        // this.formSubmitAttempt = true;
    }
    submit(): void {
        this.dissmissError();
        this.formSubmitAttempt = true;
    }
    reset(): void {
        throw new Error('Method not implemented.');
        // this.form.reset();
        // this.formSubmitAttempt = false;
        // this.dissmissError();
        
    }

    dissmissError() {
        this.errorMsg = null;
    }
}
