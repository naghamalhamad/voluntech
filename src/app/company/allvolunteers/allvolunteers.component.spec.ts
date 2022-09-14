import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvolunteersComponent } from './allvolunteers.component';

describe('AllvolunteersComponent', () => {
  let component: AllvolunteersComponent;
  let fixture: ComponentFixture<AllvolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvolunteersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllvolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
