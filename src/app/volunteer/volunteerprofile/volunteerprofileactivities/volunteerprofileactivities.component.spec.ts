import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerprofileactivitiesComponent } from './volunteerprofileactivities.component';

describe('VolunteerprofileactivitiesComponent', () => {
  let component: VolunteerprofileactivitiesComponent;
  let fixture: ComponentFixture<VolunteerprofileactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerprofileactivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerprofileactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
