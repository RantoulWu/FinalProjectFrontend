import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueManageComponent } from './revenue-manage.component';

describe('RevenueManageComponent', () => {
  let component: RevenueManageComponent;
  let fixture: ComponentFixture<RevenueManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
