import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
  templateUrl: './sumhydr.component.html',
})
export class SumhydrComponent implements OnInit {
  filteredData: any[] | undefined;

  constructor(
    private http: HttpClient,
    private location: Location,
    private dataService: DataService // Inject your DataService
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getFilteredData();
  }

  getFilteredData() {
    this.dataService.getFilteredData().subscribe(
      data => {
        data.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        this.filteredData = data;

      },
      error => {
        console.error('Error fetching filtered data:', error.message);
        // Handle error
      }

    );
  }
}