import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormReactiveComponent } from './ng-form-reactive.component';

describe('NgFormReactiveComponent', () => {
  let component: NgFormReactiveComponent;
  let fixture: ComponentFixture<NgFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFormReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
