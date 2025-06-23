import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './summech.component.html',
})
export class SummechComponent implements OnInit {
mechanicalData: any[] | undefined;

    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService // Inject your DataService
      ) { }

      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getMechanicalData();

          
      }
    
      getMechanicalData() {
        this.dataService.getMechanicalData().subscribe(data => {
          this.mechanicalData = data;
        });
      }
    }
