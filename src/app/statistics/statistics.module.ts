import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { IonicModule } from '@ionic/angular';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [StatisticsComponent, GameComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    IonicModule
    
  ]
})
export class StatisticsModule { }
