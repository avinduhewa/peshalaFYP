import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { MakeUserPostCalls } from '../../services/makeUserPostCalls';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends FormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private confirmationForm: FormBuilder,
    private router: Router,
    private signupService: MakeUserPostCalls,
  ) {
    super();
    this.formSubmitAttempt = false;
    this.initForm();
    this.initConfirmForm();
  }

  ngOnInit() {

  }

  initForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]], // TODO: allow only letters and spaces
      phoneNumber: [null, [Validators.required, Validators.minLength(10)]], // TODO: write regex for phone
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],  // TODO: write regex for password for capital Letter, Number and Special char
      type: [null, [Validators.required]],  // TODO: write regex for password for capital Letter, Number and Special char
    });
  }

  // What is this?
  // SUGGESTION: don't use 2 forms here. Take this away into another component and isolate this functionality
  initConfirmForm() {
    this.formConfirmation = this.confirmationForm.group({
      confirmationCode: [null, [Validators.required]],
    });
  }


  submit() {
    super.submit();
    if (this.form.valid) {
      const formValue = this.form.value; 
      console.log(this.form.value);
      this.signupService.signUp(formValue).subscribe(res => {
        console.log(res.name);
        this.router.navigate(['/userConfirmation'], { queryParams: { 
          name: res.name,
          userID : res.userId,
        } });
      });
    }
  }

  // What is this?
  submitConf() {
    const formValue = this.formConfirmation.value;
    this.signupService.accountConf(formValue).subscribe(res => {
      // TODO: handle error or success
    });
  }
}
