import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanModalComponent } from './scan-modal.component';
import { By } from '@angular/platform-browser';

describe('ScanModalComponent', () => {
  let component: ScanModalComponent;
  let fixture: ComponentFixture<ScanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be visible when isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();
    const modalOverlay = fixture.debugElement.query(By.css('.modal-overlay'));
    expect(modalOverlay).toBeNull();
  });

  it('should be visible when isOpen is true', () => {
    component.isOpen = true;
    fixture.detectChanges();
    const modalOverlay = fixture.debugElement.query(By.css('.modal-overlay'));
    expect(modalOverlay).not.toBeNull();
  });

  it('should emit close event when close button is clicked', () => {
    spyOn(component.close, 'emit');
    component.isOpen = true;
    fixture.detectChanges();
    const closeButton = fixture.debugElement.query(By.css('.close-button'));
    closeButton.triggerEventHandler('click', null);
    expect(component.close.emit).toHaveBeenCalled();
  });
});