import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimeOffComponent } from './list-time-off.component';

describe('ListTimeOffComponent', () => {
  let component: ListTimeOffComponent;
  let fixture: ComponentFixture<ListTimeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTimeOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
