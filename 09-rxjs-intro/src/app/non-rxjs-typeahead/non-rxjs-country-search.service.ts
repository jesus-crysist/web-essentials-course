import { Injectable } from '@angular/core';
import { CountryModel } from 'src/app/country.model';

@Injectable()
export class NonRxjsCountrySearchService {

  private readonly baseUrl: string = 'https://restcountries.eu/rest/v2';
  private readonly fields: string = 'fields=name;capital;flag';

  constructor() { }

  searchCountryByName(name: string): Promise<Array<CountryModel>> {

    const url = `${this.baseUrl}/name/${name}?${this.fields}`;

    return fetch(url)
      .then((response: Response) => {

        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status);
        }

        return response.json() as Promise<Array<CountryModel>>;
      });
  }
}
