import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GameStateService} from '../../services/game-state.service';

@Component({
  selector: 'waterdrop',
  templateUrl: './waterdrop.component.html',
  styleUrls: ['./waterdrop.component.scss']
})
export class WaterdropComponent {

  @Input()
  isClickable = false;

  @Output()
  clickEvent = new EventEmitter<any>();

  constructor(private gameState: GameStateService) {
  }

  pop(): void {
    if (this.isClickable) {
      this.gameState.emitScore(10);
      this.clickEvent.emit();
    }
  }

}
