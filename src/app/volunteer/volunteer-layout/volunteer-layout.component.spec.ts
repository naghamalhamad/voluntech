import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerLayoutComponent } from './volunteer-layout.component';

describe('VolunteerLayoutComponent', () => {
  let component: VolunteerLayoutComponent;
  let fixture: ComponentFixture<VolunteerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
