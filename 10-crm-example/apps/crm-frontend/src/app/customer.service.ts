import { Injectable } from '@angular/core';
import { Customer } from '@crm-example/api-interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  private readonly baseUrl = 'http://localhost:3333/api/customers';

  getAllCountries(): Observable<any[]> {
    return this.fetchAsObservable('https://restcountries.eu/rest/v2/all');
  }

  searchCustomers(query: any = {}): Observable<Array<Customer>> {

    const params = [];
    Object.keys(query)
      .filter(key => query[key])
      .forEach(key => params.push(`${key}=${query[key]}`));

    const url = `${this.baseUrl}/search?${params.join('&')}`;

    return this.fetchAsObservable(url);
  }

  saveCustomer(newCustomer: Customer): Observable<Customer> {

    let method = 'POST';

    if (newCustomer.id) {
      method = 'PUT';
    }

    return this.fetchAsObservable(this.baseUrl, {
      method,
      body: JSON.stringify(newCustomer),
      headers: {
        'Content-Type': 'application/json',
        'Accepted': 'application/json'
      }
    });
  }

  getCustomerById(customerId: number): Observable<Customer> {

    const url = `${this.baseUrl}/${customerId}`;

    return this.fetchAsObservable(url);
  }

  private fetchAsObservable(url: string, data: RequestInit = {method: 'GET'}): Observable<any> {
    return new Observable<Array<Customer>>(observer => {
      fetch(url, data)
        .then(this.parseResponse)
        .then((jsonBody: Customer[]) => {
          observer.next(jsonBody);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
  }

  private parseResponse(response: Response): Promise<any> {
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      throw new Error('Error fetching customer data');
    }
  }
}
