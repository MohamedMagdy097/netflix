import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
    base_path: string = "https://image.tmdb.org/t/p/original";
    lang: string = "en-US";
    totalMovies!: number;
    moviesPerPage: number = 20;
    currentPage: number = 1;

    allMovies:any;

    constructor(private movieServe: MoviesService) {}
    ngOnInit(): void {
        this.movieServe.getAllMovies(this.currentPage, this.lang).subscribe({
            next: (response) => {
                this.allMovies = response.results;
                this.totalMovies = response.total_results;
            },
        });
    }

    watchProp:boolean = false;
    showMovieDetails:Boolean = false;
    
    toggleDetails(movieId:number) {
        for (const item of this.allMovies) {
            if(item.id == movieId) {
                item.showMovieDetails =! item.showMovieDetails;
            }
        }
    }

    set searchValue(word:string) {
        this.searchMovies(word);
    }

    searchMovies(movieTitle:string) {
        this.movieServe.searchAllMovies(movieTitle).subscribe({
            next: (response) => {
                this.allMovies = response.results;
            },
        });
    }

    changeLang() {
        this.lang = this.lang == "en-US"? "ar-SA": "en-US";
        this.movieServe.getAllMovies(this.currentPage, this.lang).subscribe({
            next: (response) => {
                this.allMovies = response.results;
            },
        });
    }
    changePage(pageData: PageEvent) {
        this.currentPage = pageData.pageIndex + 1;
        this.movieServe.getAllMovies(this.currentPage, this.lang).subscribe({
            next: (response) => {
                this.allMovies = response.results;
            },
        });
    }
}
