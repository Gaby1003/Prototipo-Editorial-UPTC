import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionUptcComponent } from './informacion-uptc.component';

describe('InformacionUptcComponent', () => {
  let component: InformacionUptcComponent;
  let fixture: ComponentFixture<InformacionUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionUptcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
