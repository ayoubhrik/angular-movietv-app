import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SerieItemComponent } from './components/serie-item/serie-item.component';
import { SearchComponent } from './components/search/search.component';
const routes: Routes = [
  { path: "popular", component: PopularComponent },
  { path: "search", component: SearchComponent },
  { path: "now_playing", component: NowPlayingComponent },
  { path: "top_rated", component: TopRatedComponent },
  { path: "movie/:id", component: MovieItemComponent },
  { path: "tv/:id", component: SerieItemComponent },
  { path: '', redirectTo: '/popular', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
