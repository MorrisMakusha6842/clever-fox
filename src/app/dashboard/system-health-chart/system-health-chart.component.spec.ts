import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemHealthChartComponent } from './system-health-chart.component';

describe('SystemHealthChartComponent', () => {
  let component: SystemHealthChartComponent;
  let fixture: ComponentFixture<SystemHealthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemHealthChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemHealthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
