// pie-chart.component.ts
import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function(tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        }
      }
    }
  };

  pieChartLabels: Label[] = ['Nitrogen', 'Oxygen', 'Argon', 'Carbon dioxide'];

  pieChartData: number[] = [78.09, 20.95, 0.93, 0.03];

  pieChartType: ChartType = 'pie';

  pieChartLegend = true;

  pieChartPlugins = [];

  pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)'
      ]
    }
  ];
}
