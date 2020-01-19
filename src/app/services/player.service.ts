import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, filter, switchMap, delay } from 'rxjs/operators';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }
  private players = new BehaviorSubject<Player[]>([]);
  public players$ = this.players.asObservable();

  public GetPlayersForTeam(teamId: number): Observable<boolean> {
    return of(this.GetAllMockData())
      .pipe(
        delay((Math.floor(Math.random() * 2) + 1) * 1000), //this delay is to mock an http call. Please leave it
        map(data => {
          var responseData = [];

          for (let i = 0; i < data.length; i++) {
            const player = data[i];
            if (player.TeamId == teamId) {
              responseData.push(player);
            }
          }

          this.players.next(responseData);
          return true;
        }));
  }


  /**
   * Please don't alter mock data
   */
  private GetAllMockData(): Player[] {

    var players = [
      new Player(1, "Bobby", 21, 1),
      new Player(2, "Sam", 22, 1),
      new Player(3, "Phil", 23, 2),
      new Player(4, "Ken", 24, 2),
      new Player(5, "Steve", 25, 3),
      new Player(6, "Bobby D", 26, 3),
      new Player(7, "Susan", 27, 4),
      new Player(8, "Jack", 28, 4),
      new Player(9, "Charlie", 29, 5),
      new Player(10, "Simon", 29, 6),
      new Player(11, "Patrick", 29, 7),
      new Player(12, "Glen", 29, 8),
      new Player(13, "Steven", 29, 9)
    ];
    return players;


  }

}
