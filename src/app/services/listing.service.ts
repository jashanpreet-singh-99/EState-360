import { Injectable } from '@angular/core';
import { environment } from "../../environment/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../components/shared/property-listing/model/listing';
import { ListingSearch } from '../components/shared/quick-search/models/listing-search';

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

  searchListings(listingSearch: ListingSearch) : Observable<Listing[]> {
    console.log('Search Listing Service: ');

    const url = `${this.apiUrl}/search`;
    return this.http.post<Listing[]>(url, listingSearch);
  }
}
