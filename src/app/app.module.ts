import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeSearchModule} from "./homeSearch/homeSearch.module";
import {NavService} from "./homeSearch/nav.service";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HomeSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
