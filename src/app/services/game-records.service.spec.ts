import { TestBed } from '@angular/core/testing';

import { GameRecordsService } from './game-records.service';

describe('GameRecordsService', () => {
  let service: GameRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
