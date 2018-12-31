import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { FilterByPipe } from 'app/shared/pipes/filter-by.pipe';
import { HomeService } from 'app/shared/services/home.service';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import {
  ButtonProperties,
  DropDownList
} from 'app/shared/ResourceModels/ButtonProperties';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input()
  isThisComingFromHomePage: boolean = false;
  @Output()
  inputText: string;
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
  searchOptionsButttons: ButtonProperties[] = new Array();
  isMultipleSearchStrings: boolean = false;

  categoryDropdownOptions: DropDownList[];
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
    this.searchOptionsButttons = [
      {
        buttonId: 1,
        buttonLabel: 'Multi-Search Query',
        hasPopUp: false,
        buttonRoute: '',
        canRoute: false,
        HasDropDown: false,
        DropDownList: [{ id: 1, label: '', url: '' }],
        popUpName: 'clickSendEmailButton',
        parentEmit: true
      },
      {
        buttonId: 2,
        buttonLabel: 'single-Search Query',
        hasPopUp: false,
        buttonRoute: '',
        canRoute: false,
        HasDropDown: false,
        DropDownList: [{ id: 2, label: '', url: '' }],
        popUpName: 'clickSendEmailButton',
        parentEmit: true
      }
    ];
  }
  createForm() {
    this.form = this.fb.group({
      searchedText: ''
    });
  }
  searchValueChanged(event: { target; value: string }) {
    this.currentSearchingValue = event.target.value;
    if (this.isThisComingFromHomePage) {
      this.router.navigate(['/list', this.form.get('searchedText').value]);
      // this.router.navigate(['/search', this.form.get('searchedText').value]);
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

  keyUp() {
    this.router.navigate(['/list', this.form.get('searchedText').value]);
  }
  buttonClicked(e: ButtonProperties) {
    const buttonIdClicked = e.buttonId;
    if (buttonIdClicked === 1) {
      this.isMultipleSearchStrings = true;
      this.addCategoryDropDown();
    }
    if (buttonIdClicked === 2) {
      this.isMultipleSearchStrings = false;
    }
  }
  addCategoryDropDown() {
    this.categoryDropdownOptions = [
      {
        id: 1,
        displayName: 'Auto',
        children: [
          { id: 1.0, displayName: 'Cars' },
          { id: 1.1, displayName: 'Motor-Bike' }
        ]
      },
      {
        id: 2,
        displayName: 'Cell Phones',
        children: [
          {
            id: 2.0,
            displayName: 'Apple',
            children: [{ id: 2.01, displayName: 'Iphone' }]
          },
          { id: 2.1, displayName: 'Samsung' }
        ]
      }
    ];
  }
}
