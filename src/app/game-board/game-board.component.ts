import {Component} from '@angular/core';
import {GameStateService} from '../services/game-state.service';
import {tap} from 'rxjs';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {

  clickableId = 0;
  isGameRunning = false;

  constructor(private gameState: GameStateService) {
    this.gameState.time$.pipe(
      tap(time => this.isGameRunning = !!time)
    ).subscribe();
    this.draw();
  }

  draw(): void {
    this.clickableId = Math.floor(Math.random() * 16);
  }

}
