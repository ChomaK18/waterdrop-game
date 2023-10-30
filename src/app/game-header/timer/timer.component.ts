import {Component, OnDestroy} from '@angular/core';
import {interval, Subject, takeUntil, takeWhile, tap} from 'rxjs';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy {

  time: number;
  private destroy$ = new Subject<void>();

  constructor() {
    this.time = 10;
    interval(1000).pipe(
      takeWhile(()=> !!this.time),
      tap(() => this.time--),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
