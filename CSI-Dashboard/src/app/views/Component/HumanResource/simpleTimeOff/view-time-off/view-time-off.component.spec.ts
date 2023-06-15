import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimeOffComponent } from './view-time-off.component';

describe('ViewTimeOffComponent', () => {
  let component: ViewTimeOffComponent;
  let fixture: ComponentFixture<ViewTimeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTimeOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
