import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent
  },
  {
    path: ':id',
    component: GameComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
