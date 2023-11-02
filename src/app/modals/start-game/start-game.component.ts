import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {GameStateService} from '../../services/game-state.service';

@Component({
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

  gameTimes = [10, 30, 60];

  constructor(private dialogRef: MatDialogRef<StartGameComponent>,
              private gameState: GameStateService) {
  }

  startGame(t: number): void {
    this.gameState.startTimer(t);
    this.dialogRef.close();
  }

}
