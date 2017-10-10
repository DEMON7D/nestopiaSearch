import {Component, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'item-info',
  templateUrl: 'detalis.html'

})
export class DetalisComponent implements OnDestroy{

  private id: number;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute){
    console.log("паламау");
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }
  ngOnDestroy(){
    console.log("паламау2");
    this.subscription.unsubscribe();
  }
}
