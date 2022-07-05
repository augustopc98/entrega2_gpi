// bubble-area-chart.component.ts
import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-bubble-area-chart',
  templateUrl: './bubble-area-chart.component.html',
  styleUrls: ['./bubble-area-chart.component.css']
})
export class BubbleAreaChartComponent {
  bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 80
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 250000
          }
        }
      ]
    }
  };
  bubbleChartType: ChartType = 'bubble';
  bubbleChartLegend = true;

  bubbleChartData: ChartDataset[] = [
    {
      data: [
        { x: 45, y: 150000, r: 22.22 },
        { x: 42, y: 110000, r: 33.0 },
        { x: 60, y: 80637, r: 15.22 },
        { x: 75, y: 195055, r: 21.5 },
        { x: 30, y: 160446, r: 35.67 }
      ],
      label: 'Units sold, Sales and Profitability'
    }
  ];
}
