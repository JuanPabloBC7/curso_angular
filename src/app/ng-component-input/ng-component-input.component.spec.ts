import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentInputComponent } from './ng-component-input.component';

describe('NgComponentInputComponent', () => {
  let component: NgComponentInputComponent;
  let fixture: ComponentFixture<NgComponentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgComponentInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgComponentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
