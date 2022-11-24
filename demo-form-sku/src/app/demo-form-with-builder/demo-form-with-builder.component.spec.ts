import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithBuilderComponent } from './demo-form-with-builder.component';

describe('DemoFormWithBuilderComponent', () => {
  let component: DemoFormWithBuilderComponent;
  let fixture: ComponentFixture<DemoFormWithBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormWithBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFormWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
