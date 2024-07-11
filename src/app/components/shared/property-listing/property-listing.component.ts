import { Component, Input } from '@angular/core';

@Component({
  selector: 'property-listing',
  standalone: true,
  imports: [],
  templateUrl: './property-listing.component.html',
  styleUrl: './property-listing.component.scss'
})
export class PropertyListingComponent {
  @Input() img: string = '/assets/listing-1.jpg';
  @Input() address: string = 'Loading Address';
  @Input() region: string = '...';
  @Input() pinCode: string = '...';
  @Input() area: number = 1000;
  @Input() beds: number = 3;
  @Input() baths: number = 3;
  @Input() price: number = 500;
  @Input() rating: number = 4.5;
  @Input() ratingCount: number = 44;
}
