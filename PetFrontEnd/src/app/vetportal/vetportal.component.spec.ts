import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetportalComponent } from './vetportal.component';

describe('VetportalComponent', () => {
  let component: VetportalComponent;
  let fixture: ComponentFixture<VetportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
