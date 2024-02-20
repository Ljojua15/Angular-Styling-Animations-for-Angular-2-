import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import {CommonModule} from "@angular/common";
import { BitcampComponent } from './bitcamp/bitcamp.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    BitcampComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
