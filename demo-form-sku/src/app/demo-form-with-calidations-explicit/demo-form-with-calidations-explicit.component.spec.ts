import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithCalidationsExplicitComponent } from './demo-form-with-calidations-explicit.component';

describe('DemoFormWithCalidationsExplicitComponent', () => {
  let component: DemoFormWithCalidationsExplicitComponent;
  let fixture: ComponentFixture<DemoFormWithCalidationsExplicitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormWithCalidationsExplicitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFormWithCalidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
