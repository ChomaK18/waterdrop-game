import {Component} from '@angular/core';
import {StartGameComponent} from './modals/start-game/start-game.component';
import {Dialog} from '@angular/cdk/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waterdrop-game';

  constructor(private dialog: Dialog) {

    this.dialog.open(StartGameComponent, {
      height: '400px',
      width: '400px',
    });

  }


}
