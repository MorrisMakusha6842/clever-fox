import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickScanComponent } from './quick-scan.component';
import { ScanModalComponent } from './scan-modal.component';
import { By } from '@angular/platform-browser';

describe('QuickScanComponent', () => {
  let component: QuickScanComponent;
  let fixture: ComponentFixture<QuickScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickScanComponent, ScanModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the scan modal when the icon button is clicked', () => {
    const openButton = fixture.debugElement.query(By.css('.icon-button'));
    openButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isScanModalOpen).toBeTrue();
    const modal = fixture.debugElement.query(By.directive(ScanModalComponent));
    expect(modal).not.toBeNull();
    expect(modal.componentInstance.isOpen).toBeTrue();
  });

  it('should close the scan modal when the close event is emitted', () => {
    component.isScanModalOpen = true;
    fixture.detectChanges();
    const modal = fixture.debugElement.query(By.directive(ScanModalComponent));
    modal.componentInstance.close.emit();
    fixture.detectChanges();
    expect(component.isScanModalOpen).toBeFalse();
  });
});
