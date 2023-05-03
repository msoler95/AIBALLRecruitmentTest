import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics.component';
import { GameComponent } from './game/game.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent
  },
  {
    path: ':id',
    component: GameComponent
  },
  {
    path: ':id/:type/:number',
    component: ChartsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
