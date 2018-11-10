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

        this.homeLineup = lineups[0].lineup;
        this.homeTeam = lineups[0].teamName;

        this.awayLineup = lineups[1].lineup;
        this.awayTeam = lineups[1].teamName;
      });
  }
}
