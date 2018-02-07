import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  form: FormGroup;
  openSearchedResultsOverlay: boolean = false;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.form = this.fb.group({
      searchedText: ''
    });
  }
  searchValueChanged(event: Event) {
    const searchingValue = this.form.get('searchedText').value;
    if (searchingValue) {
      this.openSearchedResultsOverlay = true;
      console.log('searchedtext1', this.form.get('searchedText').value);
    } else {
      this.openSearchedResultsOverlay = false;
    }
  }
}
