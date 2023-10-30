import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private score = 0;
  score$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
  }

  emitScore(points: number): void {
    this.score += points;
    this.score$.next(this.score);
  }
}
