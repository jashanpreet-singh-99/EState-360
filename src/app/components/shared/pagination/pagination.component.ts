import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageState } from './models/page-state';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() start : number = 1;
  @Input() current : number = 4;
  @Input() end : number = 4;
  @Input() visible : number = 4;

  @Output() changePage = new EventEmitter<PageState>();

  lastPage : number = this.end;

  get showPageButtons(): boolean {
    return this.start < this.end;
  }

  get pageNumbers(): number[] {
    this.lastPage = (this.end < (this.start + this.visible)) ? this.end : (this.start + this.visible - 1);
    let pages: number[] = [];
    for (let page = this.start; page <= this.lastPage; page++) {
      pages.push(page);
    }
    return pages;
  }

  onPreviousPage(): void {
    if (this.current - 1  > 0) {
      this.onPageChange(this.current - 1);
    }
  }

  onPageChange(pageNumber: number): void {
    this.changePage.emit(
      {
        start: this.start,
        end: this.end,
        current: this.current,
        new: pageNumber
      }
    );

    this.current = pageNumber;
  }

  onNextPage(): void {
    if (this.current + 1  <= this.lastPage) {
      this.onPageChange(this.current + 1);
    }
  }

  isActivePage(pageNumber : number): boolean {
    return this.current == pageNumber;
  }
}
