import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'name-card-application';

  countdownMsg = '';

  countdownAliasMsg = '';

  finishCountdown(): void {
    this.countdownMsg = 'Finished!';
  }

  endCountdown(): void {
    this.countdownAliasMsg = 'Ended!';
  }
}
