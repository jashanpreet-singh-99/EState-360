import { Component, Input } from '@angular/core';
import { Listing } from './model/listing';

@Component({
  selector: 'property-listing',
  standalone: true,
  imports: [],
  templateUrl: './property-listing.component.html',
  styleUrl: './property-listing.component.scss'
})
export class PropertyListingComponent {

  @Input() listing: Listing = {
    img: '/assets/listing-1.jpg',
    address: 'Loading Address',
    region: '...',
    pinCode: '...',
    area: 1000,
    beds: 1,
    baths: 1,
    price: 500,
    rating: 4.5,
    ratingCount: 44,
    id: '',
    name: 'Property Name'
  };

  get name(): string {
    return this.listing.name;
  }

  get img(): string {
    return this.listing.img;
  }

  get address(): string {
    return this.listing.address;
  }

  get region(): string {
    return this.listing.region;
  }

  get pinCode(): string {
    return this.listing.pinCode;
  }

  get area(): number {
    return this.listing.area;
  }

  get beds(): number {
    return this.listing.beds;
  }

  get baths(): number {
    return this.listing.baths;
  }

  get price(): number {
    return this.listing.price;
  }

  get rating(): number {
    return this.listing.rating;
  }

  get ratingCount(): number {
    return this.listing.ratingCount;
  }
}
