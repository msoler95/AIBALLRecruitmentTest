import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-change-json',
  templateUrl: './change-json.component.html',
  styleUrls: ['./change-json.component.scss'],
})
export class ChangeJSONComponent  implements OnInit {

  constructor(private statisticsService: StatisticsService, private toastController: ToastController) { }
  json = ""
  ngOnInit() {
    this.json = this.statisticsService.getDummy()
  }

  async saveJSON() {
    this.statisticsService.setDummy(this.json)
    const toast = await this.toastController.create({
      message: "JSON successfully updated!",
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }

}
