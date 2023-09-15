import { Component, OnInit } from '@angular/core';
import { TvsService } from '../tvs.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
    base_path:string = "https://image.tmdb.org/t/p/original";

    allTv: any;
    totalTvs!: number;
    lang: string = "en-US";
    tvsPerPage: number = 20;
    currentPage: number = 1;

    constructor(private tvServe: TvsService) {}
    ngOnInit(): void {
        this.tvServe.getAllTvs().subscribe({
            next: (response) => {
                this.allTv = response.results;
                this.totalTvs = response.total_results;
            }
        });
    }

    watchProp:boolean = false;
    showMovieDetails:Boolean = false;

    toggleDetails(movieId:number) {
        for (const item of this.allTv) {
            if(item.id == movieId) {
                item.showMovieDetails =! item.showMovieDetails;
            }
        }
    }

    set searchValue(word:string) {
        this.searchMovies(word);
    }

    searchMovies(movieTitle:string) {
        this.tvServe.searchTvs(movieTitle).subscribe({
            next: (response) => {
                this.allTv = response.results;
            }
        });
    }
    changeLang() {
        this.lang = this.lang == "en-US"? "ar-SA": "en-US";
        this.tvServe.getAllTvs(this.lang).subscribe({
            next: (response) => {
                this.allTv = response.results;
                this.totalTvs = response.total_results;
            }
        });
    }
    changePage(pageData: PageEvent, lang: string = this.lang) {
        this.currentPage = pageData.pageIndex + 1;
        this.tvServe.changePage(this.currentPage, lang).subscribe({
            next: (response) => {
                this.allTv = response.results;               
           } 
        });
    }
}
