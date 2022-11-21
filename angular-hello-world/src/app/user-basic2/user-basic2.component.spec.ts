import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasic2Component } from './user-basic2.component';

describe('UserBasic2Component', () => {
  let component: UserBasic2Component;
  let fixture: ComponentFixture<UserBasic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBasic2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBasic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
