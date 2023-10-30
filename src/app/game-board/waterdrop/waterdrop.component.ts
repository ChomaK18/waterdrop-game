import {Component} from '@angular/core';
import {GameStateService} from '../../services/game-state.service';

@Component({
  selector: 'waterdrop',
  templateUrl: './waterdrop.component.html',
  styleUrls: ['./waterdrop.component.scss']
})
export class WaterdropComponent {

  constructor(private gameState: GameStateService) {
  }

  pop(): void {
    this.gameState.emitScore(10);
  }

}
