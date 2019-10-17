import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CountryModel } from 'src/app/country.model';
import { RxjsCountrySearchService } from 'src/app/rxjs-typeahead/rxjs-country-search.service';

@Component({
  selector: 'app-rxjs-typeahead',
  templateUrl: './rxjs-typeahead.component.html',
  styleUrls: ['./rxjs-typeahead.component.css']
})
export class RxjsTypeaheadComponent implements AfterViewInit {

  countryList: Array<CountryModel>;

  @ViewChild('countrySearchByNameInput', {static: false}) inputEl: ElementRef;

  constructor(
    private countryService: RxjsCountrySearchService
  ) { }

  ngAfterViewInit() {
    // set observable to "keyup" event for "inputEl.nativeElement"
    // then wait for 400 milliseconds after last user input,
    // trim values for spaces,
    // filter out input that is less than 3 characters long,
    // filter out same input values,
    // call service's method "searchCountriesByName()"
    // received value should be assigned to "countryList" property
  }
}
