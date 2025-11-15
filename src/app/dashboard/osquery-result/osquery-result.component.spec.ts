import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsqueryResultComponent } from './osquery-result.component';

describe('OsqueryResultComponent', () => {
  let component: OsqueryResultComponent;
  let fixture: ComponentFixture<OsqueryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsqueryResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsqueryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
