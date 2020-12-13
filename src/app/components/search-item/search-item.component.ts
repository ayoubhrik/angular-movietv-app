import { Component, Input, OnInit } from '@angular/core';
import moviegenres from 'src/app/components/search-item/genres'

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
})
export class SearchItemComponent implements OnInit {
  @Input() item;
  @Input() type: boolean;

  arraygenres: Array<string> = ["tt"]
  ngOnInit(): void {
    this.getStringGenres()
  }
  getStringGenres() {
    this.arraygenres.pop()
    this.item.genre_ids.map(item => {
      moviegenres.filter(i => {

        if (i.id === item) {
          this.arraygenres.push(i.name)

        }

      })
    })

  }

}
