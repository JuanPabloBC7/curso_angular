import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormTamplateComponent } from './ng-form-tamplate.component';

describe('NgFormTamplateComponent', () => {
  let component: NgFormTamplateComponent;
  let fixture: ComponentFixture<NgFormTamplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFormTamplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgFormTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
