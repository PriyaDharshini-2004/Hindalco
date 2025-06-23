import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/demo/service/data.service';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date adapter
import { Location } from '@angular/common';
// Register the necessary Chart.js components
Chart.register(...registerables);

@Component({
  selector:'ppump-1',
  templateUrl: './ppump1.component.html'
})
export class Ppump1Component implements OnInit {

  constructor(private dataService: DataService,private location: Location) { }

  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    // Fetch data from the API
    this.dataService.getPump1DataGraph1().subscribe(
      (result: any) => {
        // Ensure the result is sorted by date
        result.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

        // Parse the result to separate dates and values
        const dates = result.map((record: any) => new Date(record.date));
        const data = result.map((record: any) => record.pump1);

        this.data = {
          labels: dates, // Use dates as labels
          datasets: [
            {
              label: 'Pump 1 Data',
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
    
    this.options = {
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
