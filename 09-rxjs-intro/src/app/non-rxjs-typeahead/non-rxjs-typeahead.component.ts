import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/country.model';
import { NonRxjsCountrySearchService } from 'src/app/non-rxjs-typeahead/non-rxjs-country-search.service';

@Component({
  selector: 'app-non-rxjs-typeahead',
  templateUrl: './non-rxjs-typeahead.component.html',
  styleUrls: ['./non-rxjs-typeahead.component.css']
})
export class NonRxjsTypeaheadComponent implements OnInit {

  countryList: Array<CountryModel>;

  constructor(
    private countryService: NonRxjsCountrySearchService
  ) { }

  ngOnInit() {
  }

  searchForCountryByName(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    // get input value from event's target
    // do search only after user has stopped typing for 400 milliseconds
    // and trim input value for spaces
    // and if there are more than 3 characters
    // call service's "searchCountryByName"
    // received result assign to "countryList"
  }

}
