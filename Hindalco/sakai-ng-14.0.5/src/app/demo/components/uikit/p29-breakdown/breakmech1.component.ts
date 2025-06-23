import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service';

@Component({
    templateUrl: './breakmech1.component.html',
})
export class Breakmech1Component implements OnInit {
    mechanicalsBreakdownData: any;

    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService
    ) { }


    goBack(): void {
        this.location.back();
    }
    ngOnInit() {
        this.getMechanicalsBreakdownData();
    }
    getMechanicalsBreakdownData() {
        this.dataService.getMechanicalsBreakdownData().subscribe(data => {
            this.mechanicalsBreakdownData = data; // Assign the fetched data to the property
        });
    }
}


