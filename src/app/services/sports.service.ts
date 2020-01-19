import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Sport } from '../models/sport';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor() { }

  private sports = new BehaviorSubject<Sport[]>([]);
  public sports$ = this.sports.asObservable();

  private selectedSport = new BehaviorSubject<Sport>(null);
  public selectedSport$ = this.selectedSport.asObservable();

  public GetAllSports(): Observable<boolean> {
    var mockDelay = (Math.floor(Math.random() * 3) + 1) * 1000; //please don't alter this line

    return of(this.GetAllMockData())
      .pipe(
        delay(mockDelay), //this delay is to mock an http call. Please leave it
        map(data => {
          this.sports.next(data);
          return true;
        }));
  }

  public SelectSport(sport: Sport) {
    this.selectedSport.next(sport);
  }


  /**
 * Please don't alter mock data
 */
  private GetAllMockData(): Sport[] {

    var players = [
      new Sport(1, "Football"),
      new Sport(2, "Baseball"),
      new Sport(3, "Basketball"),
    ];
    return players;
  }

}
