import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StartGameComponent} from './modals/start-game/start-game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waterdrop-game';

  constructor(private dialog: MatDialog) {

    this.dialog.open(StartGameComponent, {
      height: '400px',
      width: '400px',
      panelClass: 'my-dialog'
    });

  }



}
