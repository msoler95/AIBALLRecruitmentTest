import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent  implements OnInit {

  constructor(private statisticsService: StatisticsService) { }
  games: any[] = []
  ngOnInit() {
    this.statisticsService.getAllStatistics().subscribe(s => this.games = s)
  }

}
