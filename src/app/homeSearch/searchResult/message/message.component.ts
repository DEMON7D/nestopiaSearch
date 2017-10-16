import {Component} from '@angular/core';
import {DataService} from "../../data.service";
import {IItem} from "../../IItem";
import {Router} from "@angular/router";
import {ItemService} from "../../item.service";


@Component({
  selector: 'item-info',
  templateUrl: 'message.html',
  styleUrls: ['./message.css']
})
export class MessageComponent {

  favorites: IItem[] = [];
  private item: IItem;
  favorite: boolean = false;
  star:string = "☆";
  private page: number;
  private name: string;
  private searchStatus: string;

  constructor(private dataService: DataService,private router: Router,private itemServise: ItemService){
    this.itemServise.onItemChange.subscribe( queryParam =>{
      //debugger
        console.log("message Param",queryParam);

        this.name = queryParam.name;
        this.searchStatus = queryParam.searchStatus;
        this.page = queryParam.page;

      console.log(this.name,this.searchStatus,this.page );
      }
    );
    this.dataService.onViewDetalis.subscribe( item=>{
        this.favorite = false;
        this.item = item;
        if(localStorage.getItem("favorites")) {
          this.favorites = JSON.parse(localStorage.getItem("favorites"));
          for (var favorite of this.favorites) {
            if (favorite.lister_url == this.item.lister_url) {
              this.favorite = true;
              this.star = "★";
            }
          }
        }
      }
    );
  }
  destroy(){
    this.router.navigate([{ outlets: { popup: null }}],{queryParams: {name: this.name, search: this.searchStatus, page: this.page}});
  }
  setFavorite(){
    if(this.favorite==true){
      this.unsetFavorite();
      return;
    }
    this.star = "★";
    this.favorite = !this.favorite;
    console.log(this.favorite);
    if(localStorage.getItem("favorites")){
      this.favorites = JSON.parse(localStorage.getItem("favorites"));
    }
    console.log(this.favorites);
    this.favorites.push(this.item);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }
  unsetFavorite(){
    this.star = "☆";
    localStorage.clear();
    this.favorites.splice(this.favorites.indexOf(this.item),1);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
    this.favorite = false;
  }
}
