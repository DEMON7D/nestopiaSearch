import {IItem} from "./IItem";

export interface ISearchResult {


  listings: IItem[],
  locations: [
    {
      title: string
    }
    ],
  page: number,
  status_code: string,
  total_pages: number

}
