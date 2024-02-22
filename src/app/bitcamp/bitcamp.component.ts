import { Component } from '@angular/core';

@Component({
  selector: 'app-bitcamp',
  templateUrl: './bitcamp.component.html',
  styleUrls: ['./bitcamp.component.scss'],
})
export class BitcampComponent {
  /*
  //დავალება N1
  //დაწერეთ პროგრამა რომელიც კონსოლში გამოიტანს "Hello World" -ს.
  createFirstHW: string = 'Hello World';
  //შექმენით ცვლადი და მიანიჭეთ მას რიცხვი. დაბეჭდეთ ცვლადის მნიშვნელობა.
  createSecondHW: number = 15;
  //3,4,5,6,7
  a: number = 10;
  b: number = 5;
  c: number = 13;

  sum: number = this.a + this.b;
  sum1: number = this.a - this.b;
  sum2: number = this.a * this.b;
  sum3: number = this.a / this.b;
  sum4: number = this.c % this.b;
  //8
  stringLength: string = 'sdfgasdgsdgfsdgzedmetadoriginalurivar:Ddd';
  sum5: number = this.stringLength.length;
  //9
  d: string = 'baro-';
  e: string = 'baro';
  f: string = ' world';
  sum6: string = this.d + this.e + this.f;
  //10
  upper: string = 'asfsdgsdgs';
  upperCas: string = this.upper.toUpperCase();
  //11
  low: string = 'ASDGFHAJHBWHDB';
  lowCas: string = this.low.toLowerCase();

  constructor() {
    console.log(this.createFirstHW);
    console.log(this.createSecondHW);
    console.log(this.sum);
    console.log(this.sum1);
    console.log(this.sum2);
    console.log(this.sum3);
    console.log(this.sum4);
    console.log(this.sum5);
    console.log(this.sum6);
    console.log(this.upperCas);
    console.log(this.lowCas);
  }
  */
  x = 5;
  y = 10;
  function() {}

  constructor() {
    let x: number = 5;
    let y = x + 20;

    x = 10;
    let c = x + 20;
    console.log(y);
    console.log(c);
  }
}
