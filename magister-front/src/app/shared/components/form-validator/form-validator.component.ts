import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ERROR_CONST } from '../../config/error.const';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.scss']
})
export class FormValidatorComponent implements OnInit, OnChanges {



  @Input() form: FormGroup;
  @Input() controllerPath: String;
  @Input() className: String = 'is-invalid';
  @Input() selector: String = '.form-control';
  @Input() submitAttempt: Boolean = false;

  messages: String[] = [];

  constructor(private elementRef: ElementRef, private renderer: Renderer, private renderer2: Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.validate();
  }

  validate() {

    const el = this.elementRef.nativeElement.querySelector(this.selector);
    if (this.submitAttempt && this.form.get(this.controllerPath.toString()).invalid) {
      // show error
      this.renderer.setElementClass(el, this.className.toString(), true);
      this.generateErrorMessages();
      return true;
    } else {
      // remove error

      this.renderer2.removeClass(el, this.className.toString());
      return false;
    }
  }

  generateErrorMessages() {
    this.messages = [];
    const errors = this.form.get(this.controllerPath.toString()).errors;
    for (const property in errors) {
      if (errors.hasOwnProperty(property)) {
        this.messages.push(ERROR_CONST[property] || property);
      }
    }
  }

}
