// p11.component.ts
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-component:not(p)',

    templateUrl: './p11.component.html',
})
export class P11Component {


    constructor(private location: Location) {}

    goBack(): void {
      this.location.back();
    }
}
  
