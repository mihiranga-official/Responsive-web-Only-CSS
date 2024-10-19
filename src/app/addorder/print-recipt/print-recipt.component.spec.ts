import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReciptComponent } from './print-recipt.component';

describe('PrintReciptComponent', () => {
  let component: PrintReciptComponent;
  let fixture: ComponentFixture<PrintReciptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintReciptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintReciptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
