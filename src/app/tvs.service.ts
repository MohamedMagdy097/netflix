import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvsService {
    api_key: string = "5209b0a33fdf897ec8471029242b6423";
    api_word: string = "?api_key=";
    lang_word: string = "&language=";
    search_word: string = "&query=";

    popularTvsUrl: string = "https://api.themoviedb.org/3/tv/popular";
    searchTvUrl: string = "https://api.themoviedb.org/3/search/tv";
    tvDetailsUrl: string = "https://api.themoviedb.org/3/tv/";

    constructor(private http: HttpClient) {}

    getAllTvs(lang: string = "en-US"):Observable<any> {
        return this.http.get(this.popularTvsUrl + this.api_word + this.api_key + this.lang_word + lang);
    }
    searchTvs(word: string):Observable<any> {
        if (word != "") {
            return this.http.get(this.searchTvUrl + this.api_word + this.api_key+ this.search_word + word);
        }
        else {
            return this.getAllTvs();
        }
    }
    changePage(page: number, lang: string):Observable<any> {
        return this.http.get(this.popularTvsUrl + this.api_word + this.api_key + this.lang_word + lang +
            "&page=" + page);
    }
    getTvById(id: number, lang: string):Observable<any> {
        return this.http.get(this.tvDetailsUrl + id + this.api_word + this.api_key + this.lang_word + lang);
    }
}
