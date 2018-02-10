import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { FilterByPipe } from 'app/shared/pipes/filter-by.pipe';
import { HomeService } from 'app/shared/services/home.service';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  form: FormGroup;
  openSearchedResultsOverlay: boolean = false;
  inputText: string;
  priviousSearchedValue: string;
  currentSearchingValue: string;
  searchResponse: SearchResponse[];
  searchResults: SearchResponse[];
  constructor(
    private fb: FormBuilder,
    private searchService: HomeService,
    private filtering: FilteringSearch
  ) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.form = this.fb.group({
      searchedText: ''
    });
  }
  searchValueChanged(event: { target; value: string }) {
    this.currentSearchingValue = event.target.value;
    if (this.currentSearchingValue) {
      this.openSearchedResultsOverlay = true;
      this.inputText = this.form.get('searchedText').value;
    } else {
      this.openSearchedResultsOverlay = false;
    }
  }

  turnSearchOverlayOn() {
    this.openSearchedResultsOverlay = false;
  }
}
