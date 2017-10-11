import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ISearchResult} from "./ISearchResult";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData(url: string): Observable<ISearchResult> {
    return this.http.get(url)
      .map(response => {
        console.log(response.json().response);
        return <ISearchResult>(response.json().response);
      });
  }
}
