import { Component } from '@angular/core';

@Component({
  selector: 'app-bitcamp',
  templateUrl: './bitcamp.component.html',
  styleUrls: ['./bitcamp.component.scss'],
})
export class BitcampComponent {
  firstExample: string = 'hello World';

  a = 13 % 7;

  b = 5;

  sum = this.a * this.b;

  example: string = `ხუთასი გავყოთ ორზე არის - ${500 / 2}`;
  constructor() {
    console.log(this.firstExample);
    console.log(this.a + this.b);

    console.log(this.sum);
    console.log(this.example);
  }
}
