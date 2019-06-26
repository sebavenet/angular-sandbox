import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../core/services/resources.service';

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

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit() {
    this.initItems();
  }

  initItems() {
    this.items = this.resourcesService.rsc.navbar.items;
  }
}