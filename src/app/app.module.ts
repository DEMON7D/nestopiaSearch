import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeSearchModule} from "./homeSearch/homeSearch.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
