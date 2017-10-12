import {Component, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs/Subscription";
import {DataService} from "../../data.service";
import {IItem} from "../../IItem";


@Component({
  selector: 'item-info',
  templateUrl: 'detalis.html'
})
export class DetailsComponent implements OnDestroy{

  private item: IItem;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute,private dataService: DataService){
    console.log("паламау");
    this.dataService.onViewDetalis.subscribe( item=>{
        console.log(item);
        console.log("sasadasd",item.img_height);
        this.item = item;
      }
    );
    this.subscription = activateRoute.params.subscribe(params=>{});
  }
  ngOnDestroy(){
    console.log("паламау2");
    this.subscription.unsubscribe();
  }
}
