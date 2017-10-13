import {Component} from '@angular/core';
import {DataService} from "../../data.service";
import {IItem} from "../../IItem";
import {Router} from "@angular/router";

@Component({
  selector: 'item-info',
  templateUrl: 'message.html',
  styleUrls: ['./message.css']
})
export class MessageComponent {


  private item: IItem;
  constructor(private dataService: DataService,private router: Router){
    this.dataService.onViewDetalis.subscribe( item=>{

        this.item = item;
      }
    );

  }
  destroy(){
    console.log("fdssg");
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
