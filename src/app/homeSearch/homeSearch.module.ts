import {NgModule} from '@angular/core';


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
