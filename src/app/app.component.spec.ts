import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BannerInstiComponent } from './components/banner-insti/banner-insti.component';
import { CarouselComponent } from './components/carousel-news/carousel.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { InformacionUptcComponent } from './components/informacion-uptc/informacion-uptc.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        CarouselComponent,
        CopyrightComponent,
        BannerInstiComponent,
        InformacionUptcComponent,
        SocialMediaComponent
      ],
    }).compileComponents();
  });

  it('Debe existir el componente app.component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Prototipo-Editorial'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Prototipo-Editorial');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Prototipo-Editorial app is running!');
  });
});
