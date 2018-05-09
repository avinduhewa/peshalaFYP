import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormComponent } from '../../../../shared/interfaces/form-component.interface';
import { FormComponent } from '../../../../shared/classes/form-component.class';

import { UserLoginService } from '../../services/cognito/user-login';
import { CognitoUtilService } from '../../services/cognito/cognito-util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends FormComponent implements OnInit {

  private alreadyLoggedIn: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cognitoUtilService: CognitoUtilService,
    private userService: UserLoginService,
  ) {
    super();
    this.formSubmitAttempt = false;
    this.initForm();
  }

  ngOnInit() {
    this.userService.isAuthenticated((message, result) => {
      this.isLoggedIn(message, result);
    });
  }

  initForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submit() {
    super.submit();
    if (this.form.valid) {
      this.userService.authenticate(this.form.value, (message, isLoggedIn, hasOrganisation) => {
        this.cognitoCallback(message, isLoggedIn);
      });
    }
  }

  // TODO: promises promises
  cognitoCallback(message: string, result: any) {
    console.log(message, result);
    // TODO: in js, you can check for truthy instead of if (message != null), use if(message)
    if (message != null) {
      if (message === 'User is not confirmed.') {
        // TODO: you are already in login. why navigate again?
        console.log('user not there')
      }
      else {
        this.router.navigate(['/dashboard']);
      }
    }
    else {

    }
  }

  isLoggedIn(message: string, isloggedIn: boolean) {
    // TODO: check for truthy instead of this
    if (isloggedIn !== undefined) {
      this.alreadyLoggedIn = isloggedIn;
    }
  }
}

