import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  afterThisCourse: { title: string, isActive: boolean }[] =[
  {title: '1', isActive: false },
  {title: '2', isActive: false },
  {title: '3', isActive: false }
]

}
