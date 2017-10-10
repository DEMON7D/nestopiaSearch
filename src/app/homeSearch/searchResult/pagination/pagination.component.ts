import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {NavService} from "../../nav.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css']
})
export class PaginationComponent implements OnChanges {
  @Input() totalPages: number;
  @Input() page: number;
  pages: number[]=[];



  constructor(private navPage: NavService) {

  }

  ngOnChanges() {

    let half = 5;

    let firstPage = 0, lastPage = 0;

    if (this.totalPages <= half * 2) {
      firstPage = 1;
      lastPage = this.totalPages;
    } else {
      if (this.page <= half){
        //console.log("неправильно");
        firstPage = 1;
        lastPage = half * 2+1;
      }else {
        if (this.totalPages - this.page < half) {

          firstPage = this.totalPages - half * 2;
          lastPage = this.totalPages;
        } else {
          firstPage = this.page - half;
          lastPage = this.page + half;
        }
      }
    }

    for(let i = 0; i <= half*2+1; i++){
      if(firstPage+i==lastPage)break;
      this.pages[i]=firstPage+i;
    }
}

  onclick(i: number){
    this.navPage.onPageChange.next(i);
    //console.log(i);
  }
}

