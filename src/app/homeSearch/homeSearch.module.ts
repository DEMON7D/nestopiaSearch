import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpService} from "./http.servise";
import {HomeSearchComponent} from "./homeSearch.component";


@NgModule({
  imports: [  BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [ HomeSearchComponent],
  exports: [ HomeSearchComponent],
  providers: [HttpService]
})
export class HomeSearchModule {
}
