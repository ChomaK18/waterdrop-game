import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {GameStateService} from '../../services/game-state.service';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy {

  time$: Subject<number>;
  private destroy$ = new Subject<void>();

  constructor(private gameState: GameStateService) {
    this.time$ = this.gameState.time$;
    this.gameState.startTimer(15);
  }

  startGame(): void {
    this.gameState.startTimer(15);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
