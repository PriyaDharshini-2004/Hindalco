import { Component } from '@angular/core';

@Component({
    templateUrl: './autocycledemo.component.html',
})
export class AutocycleDemoComponent  {

  showImage: number | null = null;

  toggleImage(imageNumber: number) {
    if (this.showImage === imageNumber) {
      // If the same button is clicked again, hide the image
      this.showImage = null;
  } else {
      // Otherwise, show the image for the clicked button
      this.showImage = imageNumber;
  }
  }
}

