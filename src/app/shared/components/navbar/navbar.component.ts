import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { ResourcesService } from 'src/app/core/services/resources.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: any[];

  constructor(
    private authService: AuthService,
    private resourcesService: ResourcesService
  ) {
    this.initItems();
  }

  ngOnInit() { }

  initItems() {
    this.items = this.resourcesService.rsc.navbar.items;
  }

  logout() {
    this.authService.logout();
  }
}
