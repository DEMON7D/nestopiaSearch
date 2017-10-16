import {Subject} from "rxjs/Subject";
import {IQuery} from "./searchResult/IQuery";

export class ItemService{
  onItemChange = new Subject<IQuery>();
}
