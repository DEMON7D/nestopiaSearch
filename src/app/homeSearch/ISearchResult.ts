interface ISearchResult {


  listings: [
    {
      title: string,
      price_formatted: string,
      thumb_url:string,
    }
    ],
  locations: [
    {
      title: string
    }
    ],
  page: number,
  status_code: string,


}
