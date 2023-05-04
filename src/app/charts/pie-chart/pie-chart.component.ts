import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent  implements OnInit {
  public chart: any;
  @Input() name = 'MyChart';
  @Input() stats = []
  @Input() chartName: string | null = null;
  constructor() {}
  ngOnInit(): void {
    console.log('stats', this.stats)
    this.createChart();
  }

  createChart(){
    setTimeout(() => {
      this.chart = new Chart(this.name, {
        type: 'pie', //this denotes tha type of chart
        data: {// values on X-Axis
          labels: this.stats.map(s => s['name']),
            datasets: [{
            data: this.stats.map(s => s['value']),
            backgroundColor: this.stats.map(s => s['color']),
            hoverOffset: 4
          }],
        },
        options: {
          aspectRatio:1.5,
          plugins: {
            title: {
                display: !!this.chartName,
                text: !!this.chartName ? this.chartName : ''
            }
        }
        }
  
      });
    }, 500)
    
  }


}
