import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.css']
})
export class NotificationMenuComponent implements OnInit {
  @Input() upcommingmovies;
  constructor() { }

  ngOnInit(): void {
    console.log(this.upcommingmovies)
  }

}
