import { formatDate } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchkeyword: string;
  navbaropen: string = "a";
  searchopen: boolean = false;
  focus: boolean = true;
  notificationopen: boolean = false;
  upcommingmovies;

  constructor(private router: Router, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getNotificationList();
    console.log(this.searchkeyword)

  }
  navbarToggle() {
    if (this.navbaropen == "show") {
      this.navbaropen = "a";
    } else {
      this.navbaropen = "show";
    }

    console.log(this.navbaropen)
  }

  searchToggle() {
    console.log(this.searchkeyword)
    if (this.searchkeyword != null) {
      this.searchopen = true
    } else {
      this.searchopen = !this.searchopen;
    }

  }
  searchCloseToggle() {
    this.searchopen = false
  }
  search(keyword) {
    keyword === '' ? this.router.navigate(['/popular']) : this.router.navigate(['/search', { keyword, type: "movie" }]);
  }
  @HostListener('document:click', ['$event'])

  focusOutNotificationToggle() {
    this.notificationopen = false;
  }
  notificationToggle() {
    this.notificationopen = !this.notificationopen
  }

  getNotificationList() {
    let dategte = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    let datelte = formatDate(new Date().setMonth(new Date().getMonth() + 1), 'yyyy-MM-dd', 'en');
    this.movieService.getUpcommingMovies(dategte, datelte).subscribe((data: any) => {
      data.results = data.results.filter(item => item.poster_path != null && item.backdrop_path != null).slice(0, 5).sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()).map(item => ({ ...item, timeout: Math.round((new Date(item.release_date).getTime() - new Date().getTime()) / (1000 * 3600 * 24) + 1) }))
      this.upcommingmovies = data.results
      console.log(this.upcommingmovies)
    })

  }

}
