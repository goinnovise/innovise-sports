import { Component, OnInit } from '@angular/core';
import { TeamService } from './services/team.service';
import { SportsService } from './services/sports.service';
import { PlayerService } from './services/player.service';
import { Sport } from './models/sport';
import { Team } from './models/team';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'innovise-sports';
  sports: Sport[];
  teams: Team[];
  players: Player[];
  


constructor(private teamService: TeamService,
  private sportsService: SportsService,
  private playerService: PlayerService) {
}


  ngOnInit(): void {
    
    this.sportsService.sports$.subscribe(sports => {
      this.sports = sports;
    });

    this.sportsService.GetAllSports().subscribe(result => {
      if (result) {
        // Set the first team
        this.changeSport(this.sports[0].Id);
      }
    });

    this.teamService.teams$.subscribe(teams => {
      this.teams = teams;
    });

    this.playerService.players$.subscribe(players => {
      this.players = players;
    });
  }

  changeSport(sportId): void {
    var sport = this.sports.filter(sp => sp.Id == sportId)[0];
    this.sportsService.SelectSport(sport)

    this.teamService.GetTeamsForSport().subscribe();
  }
  
  changeTeam(teamId): void {
    this.playerService.GetPlayersForTeam(teamId).subscribe(result => {
    });
  }
}
