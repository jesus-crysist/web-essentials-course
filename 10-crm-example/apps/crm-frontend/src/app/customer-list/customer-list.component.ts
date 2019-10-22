import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '@crm-example/api-interfaces';

@Component({
  selector: 'crm-example-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  @Input() customerList: Array<Customer>;

  @Output() search: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Output() addEdit: EventEmitter<number> = new EventEmitter<number>();

  customer: Customer = {} as Customer;

  filterCustomers(): void {
    this.search.emit(this.customer);
  }

  goToCustomerForm(customerId?: number): void {
    this.addEdit.emit(customerId);
  }
}
