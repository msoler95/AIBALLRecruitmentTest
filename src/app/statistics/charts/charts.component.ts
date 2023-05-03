import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent  implements OnInit {
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private statisticsService: StatisticsService,
    private toastController: ToastController) { }
  gameId: string | null = null;
  game:any = null;
  type:any = null;
  number: any = null;
  statistics: any = null; 
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.gameId = params['id']
        this.type = params['type']
        this.number = params['number']
        this.statisticsService.getStatistic(this.gameId).subscribe(g => {
          this.game = g
          this.statistics = this.game.statistics.all_stats.find((s:any) => s.id === this.type && s.order === +this.number)
          console.log('statitsti', this.statistics)
        })
      }
    );
  }

}
