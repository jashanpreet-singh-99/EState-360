import { Component } from '@angular/core';
import { QuickSearchComponent } from "../../shared/quick-search/quick-search.component";
import { PropertyListingComponent } from "../../shared/property-listing/property-listing.component";
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { map, Observable } from 'rxjs';
import { Listing } from '../../shared/property-listing/model/listing';
import { ListingSearch } from '../../shared/quick-search/models/listing-search';
import { Router } from '@angular/router';
import { ListingService } from '../../../services/listing.service';
import { SharedSearchDataService } from '../../../services/shared-search-data.service';
import { PageState } from '../../shared/pagination/models/page-state';
import { CommonModule } from '@angular/common';
import { QuickSearchMode } from '../../shared/quick-search/enums/quick_search_mode';

@Component({
  selector: 'app-rent-page',
  standalone: true,
  imports: [QuickSearchComponent, CommonModule, PropertyListingComponent, PaginationComponent],
  templateUrl: './rent-page.component.html',
  styleUrl: './rent-page.component.scss'
})
export class RentPageComponent {
  listings$: Observable<Listing[]> = new Observable<Listing[]>();
  listingsCount$: Observable<number> = new Observable<number>();;

  listingSearch: ListingSearch = {
    type: 'Rent',
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
    this.listingSearch.type = QuickSearchMode.Rent;
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
