import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booking-app-template';
  cafeList = [1, 2, 3, 4];
  selectedCafe = 2;
}
