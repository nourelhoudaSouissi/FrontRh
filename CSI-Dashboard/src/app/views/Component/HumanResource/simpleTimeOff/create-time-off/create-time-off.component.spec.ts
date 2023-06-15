import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimeOffComponent } from './create-time-off.component';

describe('CreateTimeOffComponent', () => {
  let component: CreateTimeOffComponent;
  let fixture: ComponentFixture<CreateTimeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTimeOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
