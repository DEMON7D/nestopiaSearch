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
    this.pages = [];
    if(this.totalPages < 10){
        for (let i = 0; i < this.totalPages; i++) {
          this.pages[i]=i+1;
        }
    }else{
        for(let i=0; i<10;i++ ){
          console.log(this.page);
          this.pages[i]=this.page-5+i;
        }
    }
    console.log(this.pages);
  }

  onclick(i: number){
    console.log(i);
  }
}

