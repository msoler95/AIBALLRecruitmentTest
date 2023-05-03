import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent  implements OnInit {

  constructor(private route: ActivatedRoute, private statisticsService: StatisticsService) { }
  gameId: string | null = null;
  game:any = null;
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.gameId = params['id']
        this.statisticsService.getStatistic(this.gameId).subscribe(g => this.game = g)
      }
    );
  }

}
