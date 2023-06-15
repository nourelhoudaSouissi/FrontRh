import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecoveryLeaceComponent } from './view-recovery-leace.component';

describe('ViewRecoveryLeaceComponent', () => {
  let component: ViewRecoveryLeaceComponent;
  let fixture: ComponentFixture<ViewRecoveryLeaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRecoveryLeaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRecoveryLeaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
