import { Component, OnInit } from '@angular/core';

import { ResourcesService } from 'src/app/core/services/resources.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  rsc: any;

  constructor(private resourcesService: ResourcesService) { }

  loadResources() {
    this.rsc = this.resourcesService.rsc.footer;
  }

  ngOnInit() {
    this.loadResources();
  }

}
