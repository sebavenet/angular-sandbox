import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Great Project';
  dates = [new Date().getTime()];
  addDate() {
    // Transformation d'objet => Angular ne detectera pas de changements
    this.dates.push(new Date().getTime());
    // OU
    // Nouvelle référence d'objet => Angular detectera le changement
    // this.dates = this.dates.concat(new Date().getTime());
  }
}
