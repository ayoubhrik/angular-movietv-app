import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  url: string = 'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc&page=1';
  getPopularMovies(page: number) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc&page=' + page);
  }
  getNowPlayingMovies(page: number) {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=' + page);
  }
  getNowPlayingSeries(page: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=' + page);
  }
  getTopRatedMovies(page: number) {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=' + page)
  }
  getTopRatedSeries(page: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=' + page)
  }
  getPopularSeries(page: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=' + page);
  }
  getMovieDetails(id: number) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US');
  }
  getMovieVideos(id: number) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US');
  }
  getMovieCredits(id: number) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US');
  }
  getSerieDetails(id: number) {

    return this.http.get('https://api.themoviedb.org/3/tv/' + id + '?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US');
  }
  getSerieCredits(id: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + id + '/credits?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US');
  }
  getSerieVideos(id: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US');
  }

  getSearchedMovies(key: string, page: number) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&query=' + key + '&page=' + page + '&include_adult=false')

  }
  getSearchedTv(key: string) {
    return this.http.get('https://api.themoviedb.org/3/search/tv?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&query=' + key + '&page=1&include_adult=false')

  }

  getMovieGenres() {
    //https://api.themoviedb.org/3/genre/movie/list?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US')

  }
  getUpcommingMovies(dategte, datelte) {
    //https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2020-12-12&primary_release_date.lte=2021-01-12
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=' + dategte + '&primary_release_date.lte=' + datelte)
  }
  getUpcommingTv(dategte, datelte) {
    //https://api.themoviedb.org/3/discover/tv?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&sort_by=popularity.desc&first_air_date.gte=2020-12-12&first_air_date.lte=2021-01-12&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&sort_by=popularity.desc&first_air_date.gte=' + dategte + '&first_air_date.lte=' + datelte + '&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
  }

}
