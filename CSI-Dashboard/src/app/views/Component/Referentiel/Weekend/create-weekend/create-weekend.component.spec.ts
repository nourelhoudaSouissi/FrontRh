import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWeekendComponent } from './create-weekend.component';

describe('CreateWeekendComponent', () => {
  let component: CreateWeekendComponent;
  let fixture: ComponentFixture<CreateWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWeekendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
