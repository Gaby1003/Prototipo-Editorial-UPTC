import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-banner-insti',
  templateUrl: './banner-insti.component.html',
  styleUrls: ['./banner-insti.component.css']
})
export class BannerInstiComponent implements OnInit {
  banerInsti:{ route:string, image:string }[]

  constructor() {
    this.banerInsti = [
      { route: "aa", image: "https://www.uptc.edu.co/sitio/export/sites/default/portal/.content/article/imagenes_noticias/Inscripciones-Venta-de-Pines-500x500.jpg_13137665.jpg"},
      { route: "bb", image:"https://www.uptc.edu.co/sitio/portal/.content/article/imagenes_noticias/rector500.jpeg" },
      { route: "cc", image: "https://www.uptc.edu.co/sitio/export/sites/default/portal/.content/article/imagenes_noticias/docfisica500.jpg_13137665.jpg" }
    ]
  }

  ngOnInit(): void {
    /*$(document).ready(function(){
      $('.carousel').carousel();
    });*/
  }

}
