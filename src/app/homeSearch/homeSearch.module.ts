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
import {DetailsComponent} from "./searchResult/details/details.component";
import {NotFoundComponent} from "./searchResult/notFound/notFound.component";
import {AppComponent} from "../app.component";
import {DataService} from "./data.service";
import {MessageComponent} from "./searchResult/message/message.component";
import {FiltersComponent} from "./searchResult/filters/filters.component";
import {ItemService} from "./item.service";

const itemRoutes: Routes = [
  { path: '', component: SearchResultComponent},
  { path: 'info', component: DetailsComponent},
];

const appRoutes: Routes =[
  {
    path: 'compose',
    component: MessageComponent,
    outlet: 'popup',
  },
  { path: '', component: SearchResultComponent},
  { path: 'items',children: itemRoutes},
  { path: '**', component: NotFoundComponent}
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
    DetailsComponent,
    NotFoundComponent,
    AppComponent,
    MessageComponent,
    FiltersComponent
  ],
  exports: [ HomeSearchComponent

  ],
  providers: [
    HttpService,
    NavService,
    DataService,
    ItemService
  ]
})

export class HomeSearchModule {
}
