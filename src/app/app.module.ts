import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularComponent } from './components/popular/popular.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { MovieItemComponent, TrailerDialogComponent } from './components/movie-item/movie-item.component';
import { SerieItemComponent, TrailerTvDialogComponent } from './components/serie-item/serie-item.component';
import { CardSerieComponent } from './components/card-serie/card-serie.component';
import { FocusDirective } from './directive/focus.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationMenuComponent } from './components/notification-menu/notification-menu.component';
import { SearchComponent } from './components/search/search.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularComponent,
    TopRatedComponent,
    NowPlayingComponent,
    CardMovieComponent,
    MovieItemComponent,
    SerieItemComponent,
    CardSerieComponent,
    FocusDirective,
    TrailerDialogComponent,
    TrailerTvDialogComponent,
    NotificationMenuComponent,
    SearchComponent,
    SearchItemComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    TrailerDialogComponent,
    TrailerTvDialogComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
