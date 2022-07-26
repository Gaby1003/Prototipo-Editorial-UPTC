import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bannerInstiComponent } from './banner-insti.component';

describe('bannerInstiComponent', () => {
  let component: bannerInstiComponent;
  let fixture: ComponentFixture<bannerInstiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ bannerInstiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(bannerInstiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


