import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecoveryLeaveComponent } from './create-recovery-leave.component';

describe('CreateRecoveryLeaveComponent', () => {
  let component: CreateRecoveryLeaveComponent;
  let fixture: ComponentFixture<CreateRecoveryLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecoveryLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRecoveryLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
