import {Component, OnDestroy} from '@angular/core';
import {GameStateService} from '../services/game-state.service';
import {filter, map, mergeMap, Subject, takeUntil, tap} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {EndGameComponent} from '../modals/end-game/end-game.component';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnDestroy {

  clickableId = 0;
  isGameRunning = false;
  private destroy$ = new Subject<void>();

  constructor(private gameState: GameStateService,
              private dialog: MatDialog) {
    this.gameState.time$.pipe(
      map(time => !!time),
      tap(isGameRunning => this.isGameRunning = isGameRunning),
      filter(isGameRunning => !isGameRunning),
      mergeMap(() => this.gameState.score$),
      tap(score => this.dialog.open(EndGameComponent, {
        height: '400px',
        width: '400px',
        data: score
      })),
      takeUntil(this.destroy$)
    ).subscribe();
    this.draw();
  }

  draw(): void {
    this.clickableId = Math.floor(Math.random() * 16);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
