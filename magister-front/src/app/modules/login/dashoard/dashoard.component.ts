import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css']
})
export class DashoardComponent extends FormComponent implements OnInit {

  public boardNames = ['apple','orange','pears'];
  public taskNames = ['apple','orange','pears'];
  

  constructor(
    private fb: FormBuilder,
    private confirmationForm: FormBuilder,
    private router: Router,
  ) {
    super();
    this.formSubmitAttempt = false;
    this.initForm();
  }

  ngOnInit() {
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
      boardName: [null], // TODO: allow only letters and spaces
      taskName: [null], // TODO: write regex for phone
      timeSpend: [null],
    });
  }

}
