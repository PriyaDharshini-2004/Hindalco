import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/demo/service/data.service';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date adapter
import { Location } from '@angular/common';
// Register the necessary Chart.js components
Chart.register(...registerables);

@Component({
  selector:'ppump-3',

  templateUrl: './ppump3.component.html'
})
export class Ppump3Component implements OnInit {

  constructor(private dataService: DataService,private location: Location) { }

  data3: any;
  options3: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    // Fetch data from the API
    this.dataService.getPump3DataGraph1().subscribe(
      (result: any) => {
        // Ensure the result is sorted by date
        result.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

        // Parse the result to separate dates and values
        const dates = result.map((record: any) => new Date(record.date));
        const data = result.map((record: any) => record.pump3);

        this.data3 = {
          labels: dates, // Use dates as labels
          datasets: [
            {
              label: 'Pump 3 Data',
              data: data,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
            }
          ]
        };
      },
      (error: any) => {
        console.error('Error fetching pump data:', error);
      }
    );
    
    this.options3 = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          type: 'time', // Set x-axis type to time
          time: {
            unit: 'day' // Change as needed
          },
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
  goBack(): void {
    this.location.back();
  }
}
