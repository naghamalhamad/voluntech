import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompanyprofileComponent } from './editcompanyprofile.component';

describe('EditcompanyprofileComponent', () => {
  let component: EditcompanyprofileComponent;
  let fixture: ComponentFixture<EditcompanyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcompanyprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcompanyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
