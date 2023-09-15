import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    base_path:string = "https://image.tmdb.org/t/p/original";

    selectedmovie:any;

    constructor(private route:ActivatedRoute, private movieServe: MoviesService) {}
    
    ngOnInit(): void {
        let id = parseInt(this.route.snapshot.paramMap.get('id')!);
        this.selectedmovie = this.movieServe.getMovieById(id).subscribe({
            next: (response) => {
                this.selectedmovie = response;
            },
        });
    }
}
