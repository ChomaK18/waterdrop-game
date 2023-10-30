import {Injectable} from '@angular/core';
import {interval, Subject, takeWhile, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  score$ = new Subject<number>();
  time$ = new Subject<number>();

  private score = 0;
  private time = 0;

  constructor() {
  }

  startTimer(startingTime: number): void {
    this.time = startingTime;
    this.time$.next(this.time);
    interval(1000).pipe(
      takeWhile(() => !!this.time),
      tap(() => this.score$.next(this.score)),
      tap(() => this.time--),
      tap(() => this.time$.next(this.time)),
    ).subscribe();
  }

  emitScore(points: number): void {
    this.score += points;
    this.score$.next(this.score);
  }
}
