import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent  implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private statisticsService: StatisticsService,
    private toastController: ToastController) { }
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

  async goToTeam(teamNumber: number) {
    const team = this.game.statistics.all_stats.find((g: any)=> g.id === 'team' && g.order === teamNumber) 
    if (!team) {
      const toast = await this.toastController.create({
        message: "Team " + teamNumber + " doesn't exist in the JSON (only Team 2 exists)",
        duration: 3000,
        color: 'danger'
      });
      await toast.present();

    }
    else this.router.navigate(['statistics', this.gameId, 'team', teamNumber])
  }

  async goToPlayer(playerNumber: number) {
    const team = this.game.statistics.all_stats.find((g: any)=> g.id === 'player' && g.order === playerNumber) 
    if (!team) {
      const toast = await this.toastController.create({
        message: "Player " + playerNumber + " doesn't exist in the JSON (only Player 3 exists)",
        duration: 3000,
        color: 'danger'
      });
      await toast.present();

    }
    else this.router.navigate(['statistics', this.gameId, 'player', playerNumber])
  }

}
