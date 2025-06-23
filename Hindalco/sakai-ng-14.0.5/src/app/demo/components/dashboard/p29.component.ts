// p29.component.ts
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  
    templateUrl: './p29.component.html',
})
export class P29Component {

    constructor(private location: Location) {}

    goBack(): void {
      this.location.back();
    }
}
