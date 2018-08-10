import { Component } from '@angular/core';

interface Image {
  imageURL: string;
  time: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-example';

  images: Image[] = [];

  processImage(imageURL: string) {
    console.log('blah blah');
    this.images.unshift({
      imageURL: imageURL,
      time: (new Date().toString()),
    });
  }
}
