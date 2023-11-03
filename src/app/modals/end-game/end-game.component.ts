import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {StartGameComponent} from '../start-game/start-game.component';

@Component({
  selector: 'end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
              private dialogRef: MatDialogRef<EndGameComponent>,
              private dialog: MatDialog) {
  }

  startNewGame(): void {
    this.dialogRef.close();
    this.dialog.open(StartGameComponent, {
      height: '400px',
      width: '400px',
    });
  }

}
