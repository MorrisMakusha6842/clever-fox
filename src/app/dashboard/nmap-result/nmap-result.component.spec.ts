import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmapResultComponent } from './nmap-result.component';

describe('NmapResultComponent', () => {
  let component: NmapResultComponent;
  let fixture: ComponentFixture<NmapResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NmapResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NmapResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
