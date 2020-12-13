import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.css']
})
export class SerieItemComponent implements OnInit {

  tvshowdetails;
  tvshowcredit;
  tvtrailer;
  constructor(private movieService: MoviesService, private route: ActivatedRoute, public dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getSerieDetailsNow();
    this.getSerieCreditsNow();
    this.getTvTrailerNow();
  }

  getSerieDetailsNow() {

    this.route.params.subscribe(params => {
      this.movieService.getSerieDetails(params['id']).subscribe((data: any) => {
        console.log(data)
        this.tvshowdetails = data;
      })
    });
  }
  getSerieCreditsNow() {
    this.route.params.subscribe(params => {
      this.movieService.getSerieCredits(params['id']).subscribe((data: any) => {
        console.log(data)
        data.cast = data.cast.filter(item => { return item.profile_path });
        this.tvshowcredit = data.cast.slice(0, 5);
      })
    });
  }
  getTvTrailerNow() {
    this.route.params.subscribe(params => {
      this.movieService.getSerieVideos(params['id']).subscribe((data: any) => {
        this.tvtrailer = data.results.filter(item => { return item.type == "Trailer" }).map(item => {
          return {
            key: item.key,
            name: item.name
          }
        })[0];
        console.log(this.tvtrailer)
      })
    });
  }
  openTrailer() {
    this.dialog.open(TrailerTvDialogComponent, {
      height: '500px',
      width: '800px',
      data: {
        videourl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.tvtrailer.key),
        videoname: this.tvtrailer.name
      }
    });
  }
}

@Component({
  selector: 'app-movie-dialog',
  templateUrl: '../movie-item/trailerpopup.html',
  styleUrls: ['../movie-item/movie-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerTvDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TrailerTvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}