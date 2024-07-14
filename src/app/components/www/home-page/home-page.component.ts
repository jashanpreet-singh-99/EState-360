import { Component, OnInit } from '@angular/core';
import { QuickSearchComponent } from "../../shared/quick-search/quick-search.component";
import { PropertyListingComponent } from "../../shared/property-listing/property-listing.component";
import { CommonModule } from '@angular/common';
import { Listing } from '../../shared/property-listing/model/listing';
import { ListingService } from '../../../services/listing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, QuickSearchComponent, PropertyListingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  topListings$: Observable<Listing[]> = new Observable<Listing[]>();

  constructor(private _listingService: ListingService) { }

  ngOnInit(): void {
    this.loadTopListings(6);
  }

  loadTopListings(count: number): void {
    this.topListings$ = this._listingService.getTopListings(count);
  }
}
