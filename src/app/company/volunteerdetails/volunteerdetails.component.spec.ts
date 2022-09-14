import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerdetailsComponent } from './volunteerdetails.component';

describe('VolunteerdetailsComponent', () => {
  let component: VolunteerdetailsComponent;
  let fixture: ComponentFixture<VolunteerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
