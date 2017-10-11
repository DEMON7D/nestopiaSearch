//import {Subject} from "rxjs/Subject";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {IItem} from "./IItem";

export class DataService{
  onViewDetalis = new ReplaySubject<IItem>(1);
}
