import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, MinValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListingSearch } from './models/listing-search';
import { CommonModule } from '@angular/common';
import { QuickSearchMode } from './enums/quick_search_mode';

interface ProvinceData {
  name: string,
  value: string
}

@Component({
  selector: 'quick-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quick-search.component.html',
  styleUrl: './quick-search.component.scss'
})
export class QuickSearchComponent implements OnInit {
  protected Buy: QuickSearchMode = QuickSearchMode.Buy;
  protected Sell: QuickSearchMode = QuickSearchMode.Sell;
  protected Rent: QuickSearchMode = QuickSearchMode.Rent;
  
  @Input() selectedMode: QuickSearchMode = QuickSearchMode.Rent;
  @Input() disableModeControls: boolean = false;
  @Input() defaultValue: ListingSearch | undefined;
  @Output() searchResult: EventEmitter<ListingSearch> = new EventEmitter<ListingSearch>();

  provinces: ProvinceData[] = [
    {
      name: 'Alberta',
      value: 'AB'
    },
    {
      name: 'British Columbia',
      value: 'BC'
    },
    {
      name: 'Manitoba',
      value: 'MB'
    },
    {
      name: 'New Brunswick',
      value: 'NB'
    },
    {
      name: 'Newfoundland and Labrador',
      value: 'NL'
    },
    {
      name: 'Nova Scotia',
      value: 'NS'
    },
    {
      name: 'Northwest Territories',
      value: 'NT'
    },
    {
      name: 'Nunavut',
      value: 'NU'
    },
    {
      name: 'Ontario',
      value: 'ON'
    },
    {
      name: 'Prince Edward Island',
      value: 'PE'
    },
    {
      name: 'Quebec',
      value: 'QC'
    },
    {
      name: 'Saskatchewan',
      value: 'SK'
    },
    {
      name: 'Yukon',
      value: 'YT'
    }
  ];

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      type: [this.selectedMode, Validators.required],
      keywords: [''],
      location: [''],
      minPrice: [0, Validators.pattern(/^\d+$/)],
      maxPrice: [0, Validators.pattern(/^\d+$/)],
    }, { validators: this._priceRangeValidator });
  }

  ngOnInit(): void {
    if (this.defaultValue) {
      this.searchForm.get('type')?.setValue(this.defaultValue.type);
      this.searchForm.get('keywords')?.setValue(this.defaultValue.keywords);
      this.searchForm.get('location')?.setValue(this.defaultValue.location);
      this.searchForm.get('minPrice')?.setValue(this.defaultValue.minPrice);
      this.searchForm.get('maxPrice')?.setValue(this.defaultValue.maxPrice);
    }
  }

  private _priceRangeValidator(group: FormGroup) {
    const minPrice = group.get('minPrice')!.value;
    const maxPrice = group.get('maxPrice')!.value;

    if (minPrice !== null && maxPrice !== null && minPrice !== '' && maxPrice !== '' && +maxPrice != 0 && +minPrice > +maxPrice) {
      return { rangeError: true };
    }
    return null;
  }

  isSelectedMode(mode: QuickSearchMode): boolean {
    return mode === this.searchForm.get('type')?.value;
  }

  setSelectMode(mode: QuickSearchMode): void {
    this.selectedMode = mode;

    switch (mode) {
      case QuickSearchMode.Buy:
        this.searchForm.get('type')?.setValue('Buy');
        break;
      case QuickSearchMode.Sell:
        this.searchForm.get('type')?.setValue('Sell');
        break;
      case QuickSearchMode.Rent:
        this.searchForm.get('type')?.setValue('Rent');
        break;
      default:
        break;
    }
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      const formData = this.searchForm.value as ListingSearch;
      
      this.searchResult.emit(formData);
      console.log('Search Form: ', formData);
    } else {
      console.error('Search Form Invalid: ', this.searchForm.errors);
    }
  }
}
