import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css']
})
export class PaginationComponent implements OnChanges {
  @Input() totalPages: number;
  @Input() page: number;
  pages: number[]=[];


  constructor() {
  }

  ngOnChanges() {
    let emptyCount = 0;
    let half = 5;
    this.pages = [];
    //debugger;
    if(this.totalPages <= half*2){
        for (let i = 0; i < this.totalPages; i++) {
          this.pages[i]=i+1;
        }
    }else{
      if(this.totalPages-this.page<=5){
        let start:number = this.totalPages-half*2;
        for(let i = 0; i < half * 2 + 1; i++){
          this.pages[i] = start + i;
        }
      }else {
        for (let i = 0; i < half * 2 + 1; i++) {
          if (this.page - half + i <= 0) {
            emptyCount++;
            continue;
          }
          if ((this.page - half - 1 + i) >= this.totalPages) {
            break;
          }
          this.pages[i] = this.page - half + i;
        }
        if (emptyCount > 0) {
          for (let i = 0; i < emptyCount; i++) {
            this.pages.splice(0, 1);
          }
        }
      }
    }
    console.log(this.pages);
  }

  onclick(i: number){
    console.log(i);
  }
}

