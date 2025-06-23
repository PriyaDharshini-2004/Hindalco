import { Component } from '@angular/core';

@Component({
    templateUrl: './burpdemo.component.html',
})
export class BurpDemoComponent  {
  showImage: number | null = null;

  toggleImage(imageNumber: number) {
    if (this.showImage === imageNumber) {
      // If the same button is clicked again, hide the image
      this.showImage = null;
  } else {
      // Otherwise, show the image for the clicked button
      this.showImage = imageNumber;
  }  }
    
}
