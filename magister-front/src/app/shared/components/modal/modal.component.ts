import { Component, OnInit, ElementRef, Renderer, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() sizeClass: String = 'lg';
  @Input() title: String;
  status: Boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer, private renderer2: Renderer2) { }

  ngOnInit() {
  }

  open() {
    // add class
    this.status = true;
  }

  close() {
    // remove class
    this.status = false;
  }



}
