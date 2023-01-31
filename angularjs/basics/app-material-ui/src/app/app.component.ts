import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app-material-ui';
  public howManyTimesClicked: number = 0;

  public click(): void {
    this.howManyTimesClicked++;
  }
}
