import { Component } from '@angular/core';
import { Customer, CustomerStatus, CustomerType } from '@crm-example/api-interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'crm-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly baseUrl = 'http://localhost:3333/api/customers';

  customers$: BehaviorSubject<Array<Customer>> = new BehaviorSubject([]);

  constructor() {

    // `${this.baseUrl}/search?name=ar`
    fetch(`${this.baseUrl}/all`)
      .then(this.parseResponse)
      .then((jsonBody: Customer[]) => {
        this.customers$.next(jsonBody);
      })
      .catch(err => console.error(err));
  }

  addCustomer(): void {

    const customer: Customer = {
      name: 'Perica',
      customerType: CustomerType.INDIVIDUAL,
      status: CustomerStatus.ACTIVE
    };

    fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: {
        'Content-Type': 'application/json',
        'Accepted': 'application/json'
      }
    })
      .then(this.parseResponse)
      .then((cust: Customer) => {
        const currentCustomers = this.customers$.getValue();
        this.customers$.next([...currentCustomers, cust]);
      })
      .catch(err => console.log(err));
  }

  parseResponse(response: Response): Promise<any> {
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      throw new Error('Error fetching customer data');
    }
  }
}
