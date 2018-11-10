import { Component, OnInit } from '@angular/core';
import { LineupService } from '../shared/lineup.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.less']
})
export class LineupComponent implements OnInit {

  lineups: any;
  homeLineup: any;
  awayLineup: any;
  homeTeam: any;
  awayTeam: any;

  constructor(private lineupService: LineupService) { }

  ngOnInit() {
    this.lineupService.get()
      .subscribe(lineups => {
        this.lineups = lineups;

        this.homeLineup = lineups.home.lineup;
        this.homeTeam = lineups.home.teamName;

        this.awayLineup = lineups.away.lineup;
        this.awayTeam = lineups.away.teamName;
      });
  }
}
