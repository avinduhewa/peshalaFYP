import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { debug } from 'util';
import { MakeUserPostCalls } from '../../services/makeUserPostCalls';
import { UserLoginService } from '../../services/cognito/user-login';
import { CognitoUtilService } from '../../services/cognito/cognito-util';

@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.css']
})
export class UserConfirmationComponent extends FormComponent implements OnInit {

  sub : any;
  userInfo : any;

  constructor(
    private fb: FormBuilder,
    private confirmationForm: FormBuilder,
    private router: Router,
    private signupService: MakeUserPostCalls,
    private cognitoUtilService: CognitoUtilService,
    private userService: UserLoginService,
    private route: ActivatedRoute,
  ) {
    super();
    this.formSubmitAttempt = false;
    this.initForm();
  }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.userInfo = params;
    });
  }

  initForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      confirmationCode: [null, [Validators.required]]
    });
  }


  submit() {
    super.submit();
    if (this.form.valid) {
      console.log(this.userInfo.userID);
      console.log(this.form.value.confirmationCode);
      console.log(this.form.value.username);
      // let val = this.form.value
      let params = {
        username: this.form.value.username,
        confirmationCode: this.form.value.confirmationCode,
        userId: this.userInfo.userID
      }
      this.signupService.confirmationCode(params).subscribe(res => {
        console.log(res);
        if (res.success == true) {
          this.router.navigate(['/login'])
        }
        else { 
          console.log(res)
        }
        
      })
    }
  }


}
