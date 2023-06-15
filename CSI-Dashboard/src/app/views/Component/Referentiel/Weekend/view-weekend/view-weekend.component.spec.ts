import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeekendComponent } from './view-weekend.component';

describe('ViewWeekendComponent', () => {
  let component: ViewWeekendComponent;
  let fixture: ComponentFixture<ViewWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWeekendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
