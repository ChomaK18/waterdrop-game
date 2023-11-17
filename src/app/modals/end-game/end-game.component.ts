import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {StartGameComponent} from '../start-game/start-game.component';
import {GameRecord, GameRecordsService} from '../../services/game-records.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent {

  nickControl = new FormControl('');
  isScoreSaved = false;
  gameRecords: GameRecord[] = [];
  displayedColumns: string[] = ['position', 'nick', 'score', 'date'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
              private dialogRef: MatDialogRef<EndGameComponent>,
              private dialog: MatDialog,
              private gameRecordsService: GameRecordsService) {
  }

  startNewGame(): void {
    this.dialogRef.close();
    this.dialog.open(StartGameComponent, {
      height: '400px',
      width: '400px',
      disableClose: true
    });
  }

  saveRecord(): void {
    if (this.nickControl.valid) {
      this.gameRecordsService.addScore(`${this.nickControl.value}`, this.data);
      this.nickControl.disable();
      this.gameRecords = this.gameRecordsService.gameRecords;
      this.isScoreSaved = true;

    }
  }

}
