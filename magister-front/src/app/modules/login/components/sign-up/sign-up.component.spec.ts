import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormValidatorComponent } from '../../../../shared/components/form-validator/form-validator.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent, FormValidatorComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Sign up component should create', () => {
    expect(component).toBeTruthy();
  });
  // it('Request an account button should available', () => {
  //   const fixture = TestBed.createComponent(SignUpComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#btnReqAcc')).toBeTruthy();
  // });
});
