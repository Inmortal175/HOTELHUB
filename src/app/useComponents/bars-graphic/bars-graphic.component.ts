import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto/auto'

@Component({
  selector: 'app-bars-graphic',
  templateUrl: './bars-graphic.component.html',
  styleUrls: ['./bars-graphic.component.css']
})
export class BarsGraphicComponent implements OnInit{
  ngOnInit(): void {
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [
        {
          label: 'Ventas',
          data: [1200, 1500, 2000, 1800, 2300, 2400, 3000],
          backgroundColor: ['#4BB543', '#4BB543', '#4BB543', '#4BB543', '#4BB543', '#4BB543', '#4BB543'],
          borderWidth: 1
        }
      ]
    };

    const option = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const myChart = new Chart('barChart', {
      type: 'bar',
      data: data,
      options: option
    });
  }
}
