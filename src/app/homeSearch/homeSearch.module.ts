import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpService} from "./http.servise";
import {HomeSearchComponent} from "./homeSearch.component";
import {SearchResultComponent} from "./searchResult/searchResult.component";
import {SearchResultBlockComponent} from "./searchResult/searchResultBlock/searchResultBlock.component";
import {PaginationComponent} from "./searchResult/pagination/pagination.component";
import {NavService} from "./nav.service";
import {RouterModule, Routes} from "@angular/router";
import {DetalisComponent} from "./searchResult/details/detalis.component";

const appRoutes: Routes =[
  { path: 'items', component: SearchResultComponent},
  { path: 'items/:id', component: DetalisComponent}
];

@NgModule({
  imports: [  BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ HomeSearchComponent,
    SearchResultComponent,
    SearchResultBlockComponent,
    PaginationComponent,
    DetalisComponent
  ],
  exports: [ HomeSearchComponent

  ],
  providers: [
    HttpService,
    NavService
  ]
})
export class HomeSearchModule {
}
