import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatChipInputEvent,
  MatAutocomplete
} from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchStringQuery } from 'app/shared/ResourceModels/SearchStringQuerys';

@Component({
  selector: 'app-auto-complete-searchbox',
  templateUrl: './auto-complete-searchbox.component.html',
  styleUrls: ['./auto-complete-searchbox.component.scss']
})
export class AutoCompleteSearchboxComponent implements OnInit {
  @Input() multiStringOptions: boolean;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  searchStringCtrl = new FormControl();
  filteredSearchStrings: Observable<string[]>;
  searchStringOption: string[] = [''];
  allSearchStringOptions: string[];

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(el: SearchStringQuery) {
    this.allSearchStringOptions = el.DefaultSearchQueryList;
    this.filteredSearchStrings = this.searchStringCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allSearchStringOptions.slice()
      )
    );
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.searchStringOption.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.searchStringCtrl.setValue(null);
    }
  }

  remove(searchString: string): void {
    const index = this.searchStringOption.indexOf(searchString);

    if (index >= 0) {
      this.searchStringOption.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.searchStringOption.push(event.option.viewValue);
    this.searchInput.nativeElement.value = '';
    this.searchStringCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSearchStringOptions.filter(
      searchString => searchString.toLowerCase().indexOf(filterValue) === 0
    );
  }
  ngOnInit(): void {}
}
export interface SearchString {
  name: string;
}
