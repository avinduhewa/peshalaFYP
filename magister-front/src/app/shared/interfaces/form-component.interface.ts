import { FormGroup } from '@angular/forms';

export interface IFormComponent {
    form: FormGroup;
    formSubmitAttempt: Boolean;
    errorMsg: String;

    initForm(): void;
    submit(): void;
    reset(): void;
}
