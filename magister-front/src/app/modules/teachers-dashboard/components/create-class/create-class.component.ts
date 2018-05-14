import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { UserLoginService } from '../../../login/services/cognito/user-login';
import { MakeDashboardPostCall } from '../../services/make-class-post-calls.service';
import { MakeDashboardGetCall } from '../../services/make-class-get-calls.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent extends FormComponent implements OnInit {

  public weekDays = ['Monday','Tuesday','Wednsday','Thursday','Friday','Saturday','Sunday'];
  public classTypes = ['Individual','Group'];

  constructor(
    private fb: FormBuilder,
    private confirmationForm: FormBuilder,
    private router: Router,
    private userLoginService :UserLoginService,
    private makeDashboardPostCall : MakeDashboardPostCall,
    private makeDashboardGetCall : MakeDashboardGetCall,
  ) {
    super();
    this.formSubmitAttempt = false;
    this.initForm();
  }


  ngOnInit() {
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]], // TODO: allow only letters and spaces
      description: [null, [Validators.required]], // TODO: write regex for phone
      date: [null, [Validators.required,]],
      time: [null, [Validators.required]],
      hours: [null, [Validators.required]],
      type: [null, [Validators.required]], 
      monthlyFee: [null, [Validators.required]], // TODO: write regex for password for capital Letter, Number and Special char
    });
  }

  submit() {
    super.submit();
    console.log(this.form.value);
    if (this.form.valid) {
      this.makeDashboardPostCall.createClass(this.form.value).subscribe(res =>{
        console.log(res);
      })
    }
  }
}
