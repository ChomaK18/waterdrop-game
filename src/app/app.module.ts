import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameHeaderComponent } from './game-header/game-header.component';
import { TimerComponent } from './game-header/timer/timer.component';
import { ScoreComponent } from './game-header/score/score.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { WaterdropComponent } from './game-board/waterdrop/waterdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    GameHeaderComponent,
    TimerComponent,
    ScoreComponent,
    GameBoardComponent,
    WaterdropComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
