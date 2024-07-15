import { Listing } from "../../components/shared/property-listing/model/listing";

export interface PagedListings {
    listings: Listing[];
    totalPages: number;
    currentPage: number;
}