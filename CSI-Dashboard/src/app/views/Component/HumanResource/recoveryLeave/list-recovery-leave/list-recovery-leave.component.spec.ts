import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecoveryLeaveComponent } from './list-recovery-leave.component';

describe('ListRecoveryLeaveComponent', () => {
  let component: ListRecoveryLeaveComponent;
  let fixture: ComponentFixture<ListRecoveryLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecoveryLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecoveryLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
