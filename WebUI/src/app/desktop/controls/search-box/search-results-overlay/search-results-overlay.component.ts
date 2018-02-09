import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { HomeService } from 'app/shared/services/home.service';
import { Observable } from 'rxjs/Observable';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { FilterByPipe } from 'app/shared/pipes/filter-by.pipe';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';

@Component({
  selector: 'app-search-results-overlay',
  templateUrl: './search-results-overlay.component.html',
  styleUrls: ['./search-results-overlay.component.scss']
})
export class SearchResultsOverlayComponent implements OnInit {
  @Input() searchText: string;
  searchResponse: SearchResponse[];
  searchResults: SearchResponse[];

  constructor(private searchService: HomeService, private filtering: FilteringSearch) {}

  ngOnInit() {
    this.searching();
  }

  filterBy() {
    const pipe = new FilterByPipe();
    this.searchResults = this.searchResponse; // I have to always pretend fresh copy
    const field: string = this.filtering.field.toLowerCase();
    const val: string = this.filtering.val;
    switch (field) {
      case 'topcategory':
      this.searchResults = pipe.transform(this.searchResults, 'topCategory', val);
      break;
      case 'subcategory':
      this.searchResults = pipe.transform(this.searchResults, 'subcategory', val);
      break;
      case 'condition':
      this.searchResults = pipe.transform(this.searchResults, 'condition', val);
      break;
      case 'warranty':
      this.searchResults = pipe.transform(this.searchResults, 'warranty', val);
      break;
    }
  }

  searching() {
    this.searchService.getSearchResponse(this.searchText).subscribe(x => {
      this.searchResults = x;
      this.searchResponse = this.searchResults;
      console.log('this.searchResults: ', this.searchResults);
    });
  }
}
