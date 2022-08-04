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

  it('Debe existir el componente informacion-uptc', ()=>{
    const fixture=TestBed.createComponent(InformacionUptcComponent);
    const app=fixture.componentInstance
    expect(app).toBeTruthy();
  })
});
