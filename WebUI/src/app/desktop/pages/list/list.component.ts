import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { FilterByPipe } from 'app/shared/pipes/filter-by.pipe';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { SearchService } from 'app/shared/services/search.service';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnChanges {
  searchResults: SearchResponse[] = new Array();
  searchResponse: SearchResponse[] = new Array();
  TotalCount: number;
  turnLargeLoader: boolean = false;
  searchText: string;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private filtering: FilteringSearch
  ) {
    this.turnLargeLoader = true;
  }
  ngAfterViewInit(): void {
    this.searching();
  }
  ngOnInit() {
    // var pathArray = window.location.pathname.split('/');
    // var secondLevelLocation = pathArray[-1];
    // var newPathname = '';
    // for (let i = 0; i < pathArray.length; i++) {
    //   newPathname = pathArray[i];
    // }
    const result = this.route.params.subscribe(params => {
      this.searchText = params['searchedText'];
      this.searching();
    });
    console.log('this.searchText: ', this.searchText);

  }

  ngOnChanges(changes: SimpleChanges) {
    this.searching();
  }

  filterBy() {
    this.turnLargeLoader = true;
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
    this.turnLargeLoader = false;
  }

  searching() {
    this.searchService.getSearchResponse(this.searchText).subscribe(x => {
      this.TotalCount = x.length;
      this.searchResponse = x;
      this.searchResults = x;
      this.turnLargeLoader = false;
    });
  }
}
