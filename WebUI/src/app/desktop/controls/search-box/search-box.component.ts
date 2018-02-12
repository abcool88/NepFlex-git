import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { FilterByPipe } from 'app/shared/pipes/filter-by.pipe';
import { HomeService } from 'app/shared/services/home.service';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() isThisComingFromHomePage: boolean = false;
  @Input() inputText: string;
  form: FormGroup;
  openSearchedResultsOverlay: boolean = false;
  turnCancelButtonOn: boolean = false;
  priviousSearchedValue: string;
  currentSearchingValue: string;
  searchResponse: SearchResponse[];
  searchResults: SearchResponse[];
  turnHomePageSpecificOverlayOn: Boolean = false;
  infoBoxTurnOn: boolean = false;
  infoPageLabel: string = 'please search something';
  constructor(
    private fb: FormBuilder,
    private searchService: HomeService,
    private filtering: FilteringSearch,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    const r = location.pathname;
    if (r.includes('search')) {
      this.infoBoxTurnOn = true;
    }
    if (this.inputText) {
      this.form.get('searchedText').patchValue(this.inputText);
      this.openSearchedResultsOverlay = true;
      this.turnCancelButtonOn = true;
    }
  }
  createForm() {
    this.form = this.fb.group({
      searchedText: ''
    });
  }
  searchValueChanged(event: { target; value: string }) {
    this.currentSearchingValue = event.target.value;
    if (this.isThisComingFromHomePage) {
      this.router.navigate(['/search', this.form.get('searchedText').value]);
      return;
    }
    if (this.currentSearchingValue) {
      this.turnCancelButtonOn = true;
      this.openSearchedResultsOverlay = true;
      this.inputText = this.form.get('searchedText').value;
    } else {
      this.turnCancelButtonOn = false;
      this.openSearchedResultsOverlay = false;
    }
  }

  turnSearchOverlayOn() {
    this.turnCancelButtonOn = false;
    this.form.get('searchedText').patchValue('');
    this.inputText = '';
    this.openSearchedResultsOverlay = false;
  }
  turnHomeSearchOverlayOn(val: boolean) {
    this.turnHomePageSpecificOverlayOn = val;
  }
}
