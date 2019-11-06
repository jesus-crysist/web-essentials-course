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

  timer: any;

  constructor(
    private countryService: NonRxjsCountrySearchService
  ) { }

  ngOnInit() {
  }

  searchForCountryByName(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    // get input value from event's target
    let inputVal = (event.target as HTMLInputElement).value;

    // do search only after user has stopped typing for 400 milliseconds
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {

      // and trim input value for spaces
      inputVal = inputVal.trim();

      // and if there are more than 3 characters
      if (inputVal.length < 3) {
        return;
      }

      // call service's "searchCountryByName"
      this.countryService.searchCountryByName(inputVal)
        // received result assign to "countryList"
        .then((countries) => this.countryList = countries);
    }, 400);
  }

}
