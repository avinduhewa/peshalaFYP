import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersLayoutComponent } from './teachers-layout.component';

describe('TeachersLayoutComponent', () => {
  let component: TeachersLayoutComponent;
  let fixture: ComponentFixture<TeachersLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
