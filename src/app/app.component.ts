import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
afterThisCourse = [
  {title: 'I will finish this course!', isActive: false},
  {title: 'I will improve my knowladge!', isActive: false},
  {title: 'I will start another course!', isActive: false},
]
}
