import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  moviedetails;
  moviecredit;
  movietrailer;

  constructor(private movieService: MoviesService, private route: ActivatedRoute, public dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getMovieDetailsNow();
    this.getMovieCreditsNow();
    this.getMovieTrailerNow();
  }

  getMovieDetailsNow() {

    this.route.params.subscribe(params => {
      this.movieService.getMovieDetails(params['id']).subscribe((data: any) => {
        console.log(data)
        this.moviedetails = data;
      })
    });
  }
  getMovieCreditsNow() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieCredits(params['id']).subscribe((data: any) => {
        console.log(data)
        data.cast = data.cast.filter(item => { return item.profile_path });
        this.moviecredit = data.cast.slice(0, 5);
      })
    });
  }

  getMovieTrailerNow() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieVideos(params['id']).subscribe((data: any) => {
        this.movietrailer = data.results.filter(item => { return item.type == "Trailer" }).map(item => {
          return {
            key: item.key,
            name: item.name
          }
        })[0];
        console.log(this.movietrailer)
      })
    });
  }
  openTrailer() {
    this.dialog.open(TrailerDialogComponent, {
      height: '500px',
      width: '800px',
      data: {
        videourl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.movietrailer.key),
        videoname: this.movietrailer.name
      }
    });
  }
}

@Component({
  selector: 'app-movie-dialog',
  templateUrl: 'trailerpopup.html',
  styleUrls: ['movie-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TrailerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}