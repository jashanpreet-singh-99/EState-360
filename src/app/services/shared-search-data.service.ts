import { Injectable } from '@angular/core';
import { ListingSearch } from '../components/shared/quick-search/models/listing-search';

@Injectable({
  providedIn: 'root'
})
export class SharedSearchDataService {

  private _searchData: ListingSearch = {
    type: 'Rent',
    keywords: '',
    location: '',
    minPrice: 0,
    maxPrice: 0
  };;

  updateSearchData(searchData: ListingSearch) {
    this._searchData = searchData;
  }

  getSearchData() {
    return this._searchData;
  }
}
