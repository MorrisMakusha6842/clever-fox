import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityScanHistoryComponent } from './security-scan-history.component';

describe('SecurityScanHistoryComponent', () => {
  let component: SecurityScanHistoryComponent;
  let fixture: ComponentFixture<SecurityScanHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityScanHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityScanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
