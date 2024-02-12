import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentOutputComponent } from './ng-component-output.component';

describe('NgComponentOutputComponent', () => {
  let component: NgComponentOutputComponent;
  let fixture: ComponentFixture<NgComponentOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgComponentOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgComponentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
