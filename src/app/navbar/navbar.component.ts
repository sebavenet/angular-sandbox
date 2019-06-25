import { Component, OnInit } from '@angular/core';

export interface IMenuItem {
  name: string,
  id: string,
  class: string,
  url: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: IMenuItem[];

  constructor() { }

  ngOnInit() {
    this.initItems();
  }

  initItems() {
    this.items = [
      {
        name: 'Home',
        id: 'home',
        class: '',
        url: '/home',
      },
      {
        name: 'Users',
        id: 'user',
        class: '',
        url: '/user',
      }
    ];
  }
}