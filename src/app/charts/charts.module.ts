import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IonicModule } from '@ionic/angular';
import { PieChartComponent } from './pie-chart/pie-chart.component';



@NgModule({
  declarations: [BarChartComponent, LineChartComponent, ProgressBarComponent, PieChartComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BarChartComponent, LineChartComponent, ProgressBarComponent, PieChartComponent],
})
export class ChartsModule { }
