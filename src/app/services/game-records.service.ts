import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameRecordsService {

  private records: GameRecord[] = [];

  private compareGameRecords = (a: GameRecord, b: GameRecord): number =>
    a.score === b.score ? this.compareDates(a.date, b.date) : b.score - a.score;

  private compareDates = (a: Date, b: Date): number => a < b ? 1 : a > b ? -1 : 0;

  constructor() {
  }

  get gameRecords(): GameRecord[] {
    return this.records;
  }

  addScore(nick: string, score: number): void {
    const gameRecord: GameRecord = {nick, score, date: new Date};
    this.records.push(gameRecord);
    this.records.sort(this.compareGameRecords);
  }

}

interface GameRecord {
  nick: string;
  score: number;
  date: Date;
}
