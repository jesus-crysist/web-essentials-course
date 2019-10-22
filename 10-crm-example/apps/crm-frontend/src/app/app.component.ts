import { Component, OnInit } from '@angular/core';
import { Customer, CustomerStatus, CustomerType, IdentityType } from '@crm-example/api-interfaces';
import { Observable, of } from 'rxjs';
import { CustomerService } from './customer.service';

@Component({
  selector: 'crm-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  customerList$: Observable<Array<Customer>>;
  countries$: Observable<any[]>;

  selectedCustomer$: Observable<Customer>;
  displayCustomerForm: boolean;

  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.customerList$ = this.customerService.searchCustomers({});
    this.countries$ = this.customerService.getAllCountries();
  }

  filterCustomers(filter?: Customer): void {
    this.customerList$ = this.customerService.searchCustomers(filter);
    this.displayCustomerForm = false;
  }

  showAddEditForm(customerId: number): void {
    if (customerId) {
      this.selectedCustomer$ = this.customerService.getCustomerById(customerId);
    } else {
      this.selectedCustomer$ = of({} as Customer)
    }
    this.displayCustomerForm = true;
  }

  saveCustomer(changedCustomer: Customer): void {

    const customer = {
      ...changedCustomer,
      country: changedCustomer.country.name,
      customerType: CustomerType[changedCustomer.customerType],
      identityType: IdentityType[changedCustomer.identityType],
      status: CustomerStatus[changedCustomer.status]
    };

    this.customerService.saveCustomer(customer)
      .subscribe(() => this.filterCustomers());
  }
}
