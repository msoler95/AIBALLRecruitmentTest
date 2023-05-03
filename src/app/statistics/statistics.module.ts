import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { IonicModule } from '@ionic/angular';
import { GameComponent } from './game/game.component';
import { ChartsModule } from '../charts/charts.module';
import { ChartsComponent } from './charts/charts.component';


@NgModule({
  declarations: [StatisticsComponent, GameComponent, ChartsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    IonicModule,
    ChartsModule
  ]
})
export class StatisticsModule { }
