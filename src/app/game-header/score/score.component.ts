import {Component} from '@angular/core';
import {GameStateService} from '../../services/game-state.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  score$: Subject<any>;

  constructor(private gameState: GameStateService) {
    this.score$ = this.gameState.score$;
  }

}
