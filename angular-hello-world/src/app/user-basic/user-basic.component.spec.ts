import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasicComponent } from './user-basic.component';

describe('UserBasicComponent', () => {
  let component: UserBasicComponent;
  let fixture: ComponentFixture<UserBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
