import { Component } from '@angular/core';
import { QuickSearchComponent } from "../../shared/quick-search/quick-search.component";
import { PropertyListingComponent } from "../../shared/property-listing/property-listing.component";
import { CommonModule } from '@angular/common';
import { Listing } from '../../shared/property-listing/model/listing';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, QuickSearchComponent, PropertyListingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  listings: Listing[] = [
    {
      img: '/assets/listing-1.jpg',
      address: '23 Maple Street',
      region: 'Toronto, ON',
      pinCode: 'M5A 1A1',
      area: 3500,
      beds: 4,
      baths: 4,
      price: 3500,
      rating: 4.5,
      ratingCount: 48
    },
    {
      img: '/assets/listing-2.jpg',
      address: '456 Oak Avenue',
      region: 'Vancouver, BC',
      pinCode: 'V6B 2B2',
      area: 4500,
      beds: 4,
      baths: 4,
      price: 2900,
      rating: 4.25,
      ratingCount: 32
    },
    {
      img: '/assets/listing-3.jpg',
      address: '789 Pine Road',
      region: 'Montreal, QC',
      pinCode: 'H2X 3C3',
      area: 3800,
      beds: 4,
      baths: 3,
      price: 3100,
      rating: 4.2,
      ratingCount: 18
    },
    {
      img: '/assets/listing-4.jpg',
      address: '101 Elm Drive',
      region: 'Calgary, AB',
      pinCode: 'T2P 4K4',
      area: 5500,
      beds: 5,
      baths: 5,
      price: 7500,
      rating: 4.8,
      ratingCount: 38
    },
    {
      img: '/assets/listing-5.jpg',
      address: '202 Birch Lane',
      region: 'Ottawa, ON',
      pinCode: 'K1N 5M5',
      area: 2500,
      beds: 2,
      baths: 2,
      price: 3700,
      rating: 3.5,
      ratingCount: 34
    },
    {
      img: '/assets/listing-6.jpg',
      address: '303 Cedar Crescent',
      region: 'Halifax, NS',
      pinCode: 'B3H 6N6',
      area: 5200,
      beds: 5,
      baths: 4,
      price: 5500,
      rating: 4.8,
      ratingCount: 78
    }
  ];

}
