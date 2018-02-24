import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges
} from '@angular/core';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { Observable } from 'rxjs/Observable';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { FilterByPipe } from 'app/shared/pipes/filter-by.pipe';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { SearchService } from '../../../../shared/services/search.service';

@Component({
  selector: 'app-search-results-overlay',
  templateUrl: './search-results-overlay.component.html',
  styleUrls: ['./search-results-overlay.component.scss']
})
export class SearchResultsOverlayComponent
  implements OnInit, AfterViewInit, OnChanges {
  @Input() searchText: string;
  @Output() turnOverlayOn: EventEmitter<boolean> = new EventEmitter();
  searchResults: SearchResponse[] = new Array();
  searchResponse: SearchResponse[] = new Array();
  TotalCount: number;

  constructor(
    private searchService: SearchService,
    private filtering: FilteringSearch
  ) {}
  ngAfterViewInit(): void {
    this.searching();
  }
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.searching();
  }
  closeOverlay(event: Event) {
    this.turnOverlayOn.emit(false);
  }

  filterBy() {
    const pipe = new FilterByPipe();
    this.searchResults = this.searchResponse; // I have to always pretend fresh copy
    const field: string = this.filtering.field.toLowerCase();
    let val: string = this.filtering.val;
    switch (field) {
      case 'topcategory':
        this.searchResults = pipe.transform(
          this.searchResults,
          'topCategory',
          val
        );
        break;
      case 'orderby':
        const pipe2 = new OrderByPipe();
        if (val === 'recently added') {
          val = 'dateAdded';
          this.searchResults = pipe2.transform(this.searchResults, val, true);
        } else {
          this.searchResults = pipe2.transform(this.searchResults, val, false);
        }
        break;
      case 'condition':
        this.searchResults = pipe.transform(
          this.searchResults,
          'condition',
          val
        );
        break;
      case 'warranty':
        this.searchResults = pipe.transform(
          this.searchResults,
          'warranty',
          val
        );
        break;
    }
  }

  searching() {
    this.searchService
    .getSearchResponse(this.searchText).subscribe(x => {
      this.TotalCount = x.length;
      this.searchResponse = x;
      this.searchResults = x;
    });
  }
}
