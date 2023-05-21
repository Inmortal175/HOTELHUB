import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto'

@Component({
  selector: 'app-circ-graphic',
  templateUrl: './circ-graphic.component.html',
  styleUrls: ['./circ-graphic.component.css']
})
export class CircGraphicComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const data = {
      labels: ['Habitaciones Disponibles', 'Habitaciones Ocupadas'],
      datasets: [
        {
          data: [30, 70],
          backgroundColor: ['#4BB543', '#DC3545'],
          hoverOffset: 4
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false
    };

    const myChart = new Chart('myChart', {
      type: 'pie',
      data: data,
      options: options
    });
    // myChart.update()
  }
}
