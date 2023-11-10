import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameHeaderComponent } from './game-header/game-header.component';
import { TimerComponent } from './game-header/timer/timer.component';
import { ScoreComponent } from './game-header/score/score.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { WaterdropComponent } from './game-board/waterdrop/waterdrop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartGameComponent } from './modals/start-game/start-game.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { EndGameComponent } from './modals/end-game/end-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameHeaderComponent,
    TimerComponent,
    ScoreComponent,
    GameBoardComponent,
    WaterdropComponent,
    StartGameComponent,
    EndGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
