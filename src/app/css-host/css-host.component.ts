import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-css-host',
  templateUrl: './css-host.component.html',
  styleUrls: ['./css-host.component.scss'],
})
export class CssHostComponent {
  @Input() test: any;
}
