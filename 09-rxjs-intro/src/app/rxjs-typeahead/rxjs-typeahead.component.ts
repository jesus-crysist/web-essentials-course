import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
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
    fromEvent(this.inputEl.nativeElement, 'keyup')
      .pipe(
        // then wait for 400 milliseconds after last user input,
        debounceTime(400),
        map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
        // trim values for spaces,
        map((value: string) => value.trim()),
        // filter out input that is less than 3 characters long,
        filter(val => val.length > 2),
        // filter out same input values,
        distinctUntilChanged(),
        // call service's method "searchCountriesByName()"
        switchMap(val => this.countryService.searchCountriesByName(val))
      )
      // received value should be assigned to "countryList" property
      .subscribe(countries => this.countryList = countries);
  }
}
