import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from 'src/app/country.model';

@Injectable({
  providedIn: 'root'
})
export class RxjsCountrySearchService {

  private readonly baseUrl: string = 'https://restcountries.eu/rest/v2';
  private readonly fields: string = 'fields=name;capital;flag';

  constructor(
    private http: HttpClient
  ) { }

  searchCountriesByName(name: string): Observable<Array<CountryModel>> {

    const url = `${this.baseUrl}/name/${name}?${this.fields}`;

    return this.http.get<Array<CountryModel>>(url);
  }
}
