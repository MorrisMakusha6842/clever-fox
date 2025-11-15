import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAlertsComponent } from './latest-alerts.component';

describe('LatestAlertsComponent', () => {
  let component: LatestAlertsComponent;
  let fixture: ComponentFixture<LatestAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
