import { Component, OnInit } from '@angular/core';
import { QuickSearchComponent } from "../../shared/quick-search/quick-search.component";
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Listing } from '../../shared/property-listing/model/listing';
import { ListingService } from '../../../services/listing.service';
import { PropertyListingComponent } from "../../shared/property-listing/property-listing.component";
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { PageState } from '../../shared/pagination/models/page-state';

@Component({
  selector: 'app-buy-page',
  standalone: true,
  imports: [QuickSearchComponent, CommonModule, PropertyListingComponent, PaginationComponent],
  templateUrl: './buy-page.component.html',
  styleUrl: './buy-page.component.scss'
})
export class BuyPageComponent implements OnInit {

  listings$: Observable<Listing[]> = new Observable<Listing[]>();

  constructor(private _listingService: ListingService) { }

  ngOnInit(): void {
    this.loadListings();
  }

  loadListings(): void {
    this.listings$ = this._listingService.getTopListings(6);
  }

  onPageChangeRequest(pageState: PageState): void {
    console.log('Change Page: ', pageState);
  }

}
