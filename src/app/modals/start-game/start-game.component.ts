import {Component} from '@angular/core';
import {GameStateService} from '../../services/game-state.service';
import {DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

  gameTimes = [10, 30, 60];

  constructor(private dialogRef: DialogRef<StartGameComponent>,
              private gameState: GameStateService) {
  }

  startGame(t: number): void {
    this.gameState.startTimer(t);
    this.dialogRef.close();
  }

}
