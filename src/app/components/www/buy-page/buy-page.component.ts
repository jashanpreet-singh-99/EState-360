import { Component, OnInit } from '@angular/core';
import { QuickSearchComponent } from "../../shared/quick-search/quick-search.component";
import { CommonModule } from '@angular/common';
import { map, Observable, Subject } from 'rxjs';
import { Listing } from '../../shared/property-listing/model/listing';
import { ListingService } from '../../../services/listing.service';
import { PropertyListingComponent } from "../../shared/property-listing/property-listing.component";
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { PageState } from '../../shared/pagination/models/page-state';
import { ListingSearch } from '../../shared/quick-search/models/listing-search';
import { Router } from '@angular/router';
import { SharedSearchDataService } from '../../../services/shared-search-data.service';
import { QuickSearchMode } from '../../shared/quick-search/enums/quick_search_mode';

@Component({
  selector: 'app-buy-page',
  standalone: true,
  imports: [QuickSearchComponent, CommonModule, PropertyListingComponent, PaginationComponent],
  templateUrl: './buy-page.component.html',
  styleUrl: './buy-page.component.scss'
})
export class BuyPageComponent implements OnInit {

  listings$: Observable<Listing[]> = new Observable<Listing[]>();
  listingsCount$: Observable<number> = new Observable<number>();;

  listingSearch: ListingSearch = {
    type: 'Buy',
    keywords: '',
    location: '',
    minPrice: 0,
    maxPrice: 0
  };

  constructor(private router: Router, 
    private _listingService: ListingService,
    private _searchDataService: SharedSearchDataService
  ) {
    this.listingSearch = this._searchDataService.getSearchData();
    this.listingSearch.type = QuickSearchMode.Buy;
   }

  ngOnInit(): void {
    this.loadListings();
  }

  loadListings(): void {
    this.listings$ = this._listingService.searchListings(this.listingSearch);

    this.listingsCount$ = this.listings$.pipe(
      map(listings => listings.length)
    )
  }

  onPageChangeRequest(pageState: PageState): void {
    console.log('Change Page: ', pageState);
  }

  updateSearchPattern(searchListing: ListingSearch): void {
    this.listingSearch = searchListing;
    this.loadListings();
  }
}
