import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchingText: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const result = this.route.params.subscribe(params => {
      this.searchingText = params['searchedText']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }
}
