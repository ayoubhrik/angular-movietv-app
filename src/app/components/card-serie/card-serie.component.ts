import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-serie',
  templateUrl: './card-serie.component.html',
  styleUrls: ['./card-serie.component.css']
})
export class CardSerieComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit(): void {
  }

}
