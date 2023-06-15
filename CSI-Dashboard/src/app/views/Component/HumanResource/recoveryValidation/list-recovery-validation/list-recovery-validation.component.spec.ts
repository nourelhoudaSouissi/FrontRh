import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecoveryValidationComponent } from './list-recovery-validation.component';

describe('ListRecoveryValidationComponent', () => {
  let component: ListRecoveryValidationComponent;
  let fixture: ComponentFixture<ListRecoveryValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecoveryValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecoveryValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
