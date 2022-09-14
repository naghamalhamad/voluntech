import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitydetailsComponent } from './activitydetails.component';

describe('ActivitydetailsComponent', () => {
  let component: ActivitydetailsComponent;
  let fixture: ComponentFixture<ActivitydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
