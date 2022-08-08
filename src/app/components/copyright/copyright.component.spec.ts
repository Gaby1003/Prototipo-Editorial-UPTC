import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightComponent } from './copyright.component';

describe('CopyrightComponent', () => {
  let component: CopyrightComponent;
  let fixture: ComponentFixture<CopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir el componente copyright', ()=>{
    const fixture=TestBed.createComponent(CopyrightComponent);
    const app=fixture.componentInstance
    expect(app).toBeTruthy();
  })
});
