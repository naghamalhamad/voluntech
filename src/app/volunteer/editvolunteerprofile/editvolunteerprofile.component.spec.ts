import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvolunteerprofileComponent } from './editvolunteerprofile.component';

describe('EditvolunteerprofileComponent', () => {
  let component: EditvolunteerprofileComponent;
  let fixture: ComponentFixture<EditvolunteerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvolunteerprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditvolunteerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
