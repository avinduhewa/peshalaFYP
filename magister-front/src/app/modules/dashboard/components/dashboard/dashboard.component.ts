import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { NgSelectModule } from '@ng-select/ng-select';
import { MakeDashboardGetCall } from '../../services/makeDashboardGetCall.service'
import { UserLoginService } from '../../../login/services/cognito/user-login';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends FormComponent implements OnInit {

  public className = ['apple', 'orange', 'pears'];


  constructor(
    private fb: FormBuilder,
    private confirmationForm: FormBuilder,
    private router: Router,
    private makeCalls: MakeDashboardGetCall,
    private userLoginService: UserLoginService
  ) {
    super();
    this.formSubmitAttempt = false;
    this.initForm();
  }

  ngOnInit() {
    this.userLoginService.isAuthenticated((err, res) => {
      console.log('qweqwe', err, res);
      if (res === false) {
        this.router.navigate(['/login']);
      }
    })
    const orgID = '5ad60807c4a8148f3257995c';
    this.makeCalls.getAllProjects(orgID).subscribe(res => {
      console.log(res)
    });

  }

  submit() {
    super.submit();
    if (this.form.valid) {
      const formValue = this.form.value; // TODO:'formValue' is never reassigned; use 'const' instead of 'let'
      // TODO: wrtie interface for formValue
      // TODO: always use semi colons as a coding standard
      console.log(formValue)
    }
  }

  initForm() {
    this.form = this.fb.group({
      className: [null], // TODO: allow only letters and spaces
    });
  }

}
