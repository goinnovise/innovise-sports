import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Team } from '../models/team';
import { map, delay } from 'rxjs/operators';
import { SportsService } from './sports.service';
import { Sport } from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private selectedSport: Sport;
  constructor(private sportService: SportsService) {

    this.sportService.selectedSport$.subscribe((sport: Sport) => {
      this.selectedSport = sport;

    });
  }


  private teams = new BehaviorSubject<Team[]>([]);
  public teams$ = this.teams.asObservable();


  public GetTeamsForSport(): Observable<boolean> {
    return of(this.GetAllMockData())
      .pipe(
        delay((Math.floor(Math.random() * 2) + 1) * 1000), //this delay is to mock an http call. Please leave it
        map(data => {
          var responseData = [];
          for (let i = 0; i < data.length; i++) {
            const element = data[i];

            if (element.SportId == this.selectedSport.Id) {
              responseData.push(element);
            }
          }
          this.teams.next(responseData);
          return true;
        }));
  }


  /**
 * Please don't alter mock data
 */
  private GetAllMockData(): Team[] {

    var teams = [
      new Team(1, "Titans", 1),
      new Team(2, "Chiefs", 1),
      new Team(3, "Seahawks", 1),

      new Team(4, "Mariners", 2),
      new Team(5, "Cardinals", 2),
      new Team(6, "Yankees", 2),

      new Team(7, "Sonics", 3),
      new Team(8, "Heat", 3),
      new Team(9, "Lakers", 3),

    ];
    return teams;
  }

}
