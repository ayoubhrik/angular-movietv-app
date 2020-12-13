import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedmovies: [] = []
  keywordparam
  ismovie: boolean = true;
  navigationSubscription: Subscription;
  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getSearchedMoviesNow()
      }
    });
  }

  ngOnInit(): void {
  }

  getSearchedMoviesNow() {
    this.ismovie = true
    let page = 1
    this.route.params.subscribe((params: Params) => {

      this.movieService.getSearchedMovies(params.keyword, page).subscribe((data: any) => {
        this.keywordparam = params.keyword
        let tmp = data.results.filter(item => item.poster_path != null && item.backdrop_path != null);
        this.searchedmovies = tmp;

      })



    });
  }

  getSearchedTvNow() {
    this.ismovie = false
    this.movieService.getSearchedTv(this.keywordparam).subscribe((data: any) => {

      let tmp = data.results.filter(item => item.poster_path != null && item.backdrop_path != null);
      this.searchedmovies = tmp;
    })

  }


}
