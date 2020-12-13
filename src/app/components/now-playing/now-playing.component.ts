import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  listmovies: any[] = [];
  listseries: any[] = [];
  cpt: number = 0;
  cpt_series: number = 0;
  page_series: number = 1;
  page: number = 1;
  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getNowPlayingMoviesWhileScrolling();
    this.getPopuarSeriesWhileScrolling();
  }


  getNowPlayingMoviesWhileScrolling() {
    this.movieService.getNowPlayingMovies(this.page).subscribe((data: any) => {
      console.log(data);
      this.listmovies = [...this.listmovies, ...data.results];

    })
  }
  getPopuarSeriesWhileScrolling() {
    this.movieService.getNowPlayingSeries(this.page_series).subscribe((data: any) => {
      console.log(data);
      this.listseries = [...this.listseries, ...data.results];

    })
  }

  scrollLeft(element: HTMLElement) {
    this.cpt--;
    element.scrollLeft -= element.offsetWidth;
  }
  scrollRight(element: HTMLElement) {
    this.cpt++;
    console.log("cpt=" + this.cpt)
    if (this.cpt > 4) {
      this.cpt = 0;
      this.page = this.page + 1;
      this.getNowPlayingMoviesWhileScrolling();
      //element.scrollLeft -= element.offsetWidth * 4;
    } else {

      console.log("oncrool calling : page" + this.page + " listmovies" + this.listmovies)
      element.scrollLeft += element.offsetWidth;
    }

  }

  scrollLeftS(element: HTMLElement) {
    this.cpt_series--;
    element.scrollLeft -= element.offsetWidth;
  }
  scrollRightS(element: HTMLElement) {
    this.cpt_series++;
    console.log("cpt=" + this.cpt_series)
    if (this.cpt_series > 4) {
      this.cpt_series = 0;
      this.page_series = this.page_series + 1;
      this.getPopuarSeriesWhileScrolling();

    } else {

      console.log("oncrool calling : page" + this.page_series + " listmovies" + this.listseries)
      element.scrollLeft += element.offsetWidth;
    }

  }


}
