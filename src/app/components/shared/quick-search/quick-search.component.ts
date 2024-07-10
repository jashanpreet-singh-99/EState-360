import { Component } from '@angular/core';

@Component({
  selector: 'quick-search',
  standalone: true,
  imports: [],
  templateUrl: './quick-search.component.html',
  styleUrl: './quick-search.component.scss'
})
export class QuickSearchComponent {

  selectedMode: number = 0;

  isSelectedMode(mode: number): boolean {
    return mode === this.selectedMode;
  }

  setSelectMode(mode: number): void {
    this.selectedMode = mode;
  }
}
