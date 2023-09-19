import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvsService } from '../tvs.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
    base_path: string = "https://image.tmdb.org/t/p/original";

    selectedtv: any;

    constructor(private route:ActivatedRoute, private tvServe: TvsService) {
    }
    ngOnInit(): void {
        let id = parseInt(this.route.snapshot.paramMap.get('id')!);
        this.tvServe.getTvById(id, "en-US").subscribe({
            next: (response) => {
                this.selectedtv = response;
            }
        });
        // this.selectedtv = this.allTv.find((movie)=> movie.id == id);
    }
    
}
