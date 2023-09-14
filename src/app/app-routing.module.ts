import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'', component: HomeComponent},
    {path: 'movie', component: MovieComponent},
    {path: 'tv', component: TvComponent},
    {path: 'about', component: AboutComponent},
    {path: 'details/:id', component: MovieDetailsComponent},
    {path: 'tvdetails/:id', component: TvDetailsComponent},
    
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
