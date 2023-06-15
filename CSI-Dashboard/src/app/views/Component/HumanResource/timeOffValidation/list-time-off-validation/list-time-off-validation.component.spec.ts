import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimeOffValidationComponent } from './list-time-off-validation.component';

describe('ListTimeOffValidationComponent', () => {
  let component: ListTimeOffValidationComponent;
  let fixture: ComponentFixture<ListTimeOffValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTimeOffValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTimeOffValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
