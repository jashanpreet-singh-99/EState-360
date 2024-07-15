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
  //@Input() img: string = '/assets/listing-1.jpg';
  // @Input() address: string = 'Loading Address';
  // @Input() region: string = '...';
  //@Input() pinCode: string = '...';
  // @Input() area: number = 1000;
  // @Input() beds: number = 3;
  // @Input() baths: number = 3;
  // @Input() price: number = 500;
  // @Input() rating: number = 4.5;
  // @Input() ratingCount: number = 44;

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
    ratingCount: 44
  };

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
