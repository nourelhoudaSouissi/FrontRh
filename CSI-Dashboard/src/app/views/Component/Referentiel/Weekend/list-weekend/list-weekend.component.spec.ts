import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWeekendComponent } from './list-weekend.component';

describe('ListWeekendComponent', () => {
  let component: ListWeekendComponent;
  let fixture: ComponentFixture<ListWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWeekendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
