import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  facebook: any
  instagram: any
  youtube: any
  constructor(private routesService: RoutesService) { }

   ngOnInit(): void {
     this.routesService.getRoutes('0').subscribe(async data => {
      console.log(data);
      this.facebook = await data;
    });
    this.routesService.getRoutes('1').subscribe(data => {
      console.log(data);
      this.instagram = data;
    });
    this.routesService.getRoutes('2').subscribe(data => {
      console.log(data);
      this.youtube = data;
    });
  }

  goToFacebook(){
    console.log(this.facebook.route)
    window.location.href = this.facebook.route;
  }

  goToInstagram(){
    console.log(this.instagram.route)
    window.location.href = this.instagram.route;
  }

  goToYoutube(){
    console.log(this.youtube.route)
    window.location.href = this.youtube.route;
  }

}
