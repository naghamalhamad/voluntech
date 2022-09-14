import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyprofilepostedComponent } from './companyprofileposted.component';

describe('CompanyprofilepostedComponent', () => {
  let component: CompanyprofilepostedComponent;
  let fixture: ComponentFixture<CompanyprofilepostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyprofilepostedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyprofilepostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
