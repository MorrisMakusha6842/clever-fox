import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickScanComponent } from './quick-scan.component';

describe('QuickScanComponent', () => {
  let component: QuickScanComponent;
  let fixture: ComponentFixture<QuickScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
