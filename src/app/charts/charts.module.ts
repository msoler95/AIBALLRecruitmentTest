import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [BarChartComponent, LineChartComponent, ProgressBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BarChartComponent, LineChartComponent, ProgressBarComponent],
})
export class ChartsModule { }
