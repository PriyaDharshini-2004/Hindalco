import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './breakhydra.component.html',
})
export class BreakhydraComponent implements OnInit {
    breakdownData: any[] | undefined;
    
    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService // Inject your DataService
      ) { }


      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getBreakdownData();
      }
    
      getBreakdownData() {
        this.dataService.getBreakdownData().subscribe({
          next: (data) => {
            this.breakdownData = data;
          },
          error: (error) => {
            console.error('Error fetching breakdown data:', error);
            // Optionally, you can show an error message to the user or handle the error in some other way
          }
        });
      }
    }