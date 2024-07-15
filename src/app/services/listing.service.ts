import { Injectable } from '@angular/core';
import { environment } from "../../environment/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../components/shared/property-listing/model/listing';
import { ListingSearch } from '../components/shared/quick-search/models/listing-search';
import { PagedListings } from './models/paged-listings';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private apiUrl = environment.listingUrl;

  constructor(private http: HttpClient) { }

  getTopListings(count: number): Observable<Listing[]> {
    const url = `${this.apiUrl}/top?count=${count}`;
    return this.http.get<Listing[]>(url);
  }

  searchListings(listingSearch: ListingSearch, pageNumber: number) : Observable<PagedListings> {
    console.log('Search Listing Service: ');
    const pageSize = 6;
    const url = `${this.apiUrl}/search?pageNumber=${pageNumber}&pageSize${pageSize}`;
    return this.http.post<PagedListings>(url, listingSearch);
  }
}
