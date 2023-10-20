import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  movieName:any= ""
  movie:any

  constructor(private movieService:MovieService) { }

  movieDetect(){
    this.movieService.movieDetect(this.movieName).subscribe(data => {
      this.movie = data
    })
  }

 
  

}
