import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistervolunteerComponent } from './registervolunteer.component';

describe('RegistervolunteerComponent', () => {
  let component: RegistervolunteerComponent;
  let fixture: ComponentFixture<RegistervolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistervolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistervolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
