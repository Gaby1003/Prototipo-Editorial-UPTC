import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInstiComponent } from './banner-insti.component';

describe('BannerInstiComponent', () => {
  let component: BannerInstiComponent;
  let fixture: ComponentFixture<BannerInstiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerInstiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInstiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir el componente banner-insti ', ()=>{
    const fixture=TestBed.createComponent(BannerInstiComponent);
    const app=fixture.componentInstance
    expect(app).toBeTruthy();
  })
});


