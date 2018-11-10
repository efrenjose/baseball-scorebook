import { Component, OnInit } from '@angular/core';
import { LineupService } from '../shared/lineup.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.less']
})
export class LineupComponent implements OnInit {

  lineup: any;

  constructor(private lineupService: LineupService) { }

  ngOnInit() {
    this.lineupService.get()
      .subscribe(lineup => this.lineup = lineup);
  }
}
