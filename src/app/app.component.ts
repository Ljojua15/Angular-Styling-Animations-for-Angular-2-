import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toDo: any = [
    { list: '1', arbeit: false },
    { list: '2', arbeit: false },
    { list: '3', arbeit: false },
  ];

  constructor() {}
}
