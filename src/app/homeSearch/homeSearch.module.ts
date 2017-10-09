import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpService} from "./http.servise";
import {HomeSearchComponent} from "./homeSearch.component";
import {SearchResultComponent} from "./searchResult/searchResult.component";
import {SearchResultBlockComponent} from "./searchResult/searchResultBlock/searchResultBlock.component";
import {PaginationComponent} from "./searchResult/pagination/pagination.component";



@NgModule({
  imports: [  BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [ HomeSearchComponent,
    SearchResultComponent,
    SearchResultBlockComponent,
    PaginationComponent

  ],
  exports: [ HomeSearchComponent

  ],
  providers: [HttpService]
})
export class HomeSearchModule {
}
