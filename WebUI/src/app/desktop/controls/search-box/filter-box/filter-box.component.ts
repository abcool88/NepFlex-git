import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { ItemDescription } from 'app/shared/ResourceModels/ItemDescription';
import { SearchService } from 'app/shared/services/search.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {
  @Input() itemDescriptions: ItemDescription[]= new Array();
  @Input() _selectedValue: string;
  @Output() filteredBy: EventEmitter<any> = new EventEmitter();
  @Output() closeFilterBar: EventEmitter<boolean> = new EventEmitter();
  orderListBy: string[] = ['Recently Added', 'Old Stuffs'];

  constructor(
    private filtering: FilteringSearch,
    private _searchService: SearchService
  ) {}

  get selectedValue() {
    return this._selectedValue;
  }

  set selectedValue(val) {
    this._selectedValue = val;
    this.propagateChange(this._selectedValue);
  }
  ngOnInit(): void {
    this.filterBar();
  }
  filterBar() {
    this._searchService.getItemDescription().subscribe(x => {
      this.itemDescriptions = x;
    });

    //   this._searchService.getItemDescription().pipe(
    //     map(res => res.values)
    //   )
    //   .subscribe(res => console.log(res));
    // }

    this._searchService
      .getItemDescription()
      .subscribe(res => console.log(res));
  }

  changedFilterBy(event: { target; value: string }, field: string) {
    const val = event.target.value;
    this.filtering.val = val;
    this.filtering.field = field;
    this.filteredBy.emit();
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
  propagateChange = (_: any) => {};
}
