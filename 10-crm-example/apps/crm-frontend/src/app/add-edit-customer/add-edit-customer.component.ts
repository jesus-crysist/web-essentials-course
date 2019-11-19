import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Customer, CustomerStatus, CustomerType, IdentityType } from '@crm-example/api-interfaces';

@Component({
  selector: 'crm-example-add-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit, OnChanges {

  @Input() customer: Customer;
  @Input() countries: Array<any>;

  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();
  @Output() save: EventEmitter<Customer> = new EventEmitter<Customer>();

  formCustomer: Customer = {} as Customer;

  customerTypes: Array<{ label: string, value: string }>;
  identityTypes: Array<{ label: string, value: string }>;
  customerStatuses: Array<{ label: string, value: string }>;

  constructor() {
  }

  ngOnInit(): void {

    this.customerTypes = Object.keys(CustomerType)
      .map(key => ({label: CustomerType[key], value: key}));
    this.identityTypes = Object.keys(IdentityType)
      .map(key => ({label: IdentityType[key], value: key}));
    this.customerStatuses = Object.keys(CustomerStatus)
      .map(key => ({label: CustomerStatus[key], value: key}));

  }

  ngOnChanges(): void {
    if (this.customer) {
      this.formCustomer = {
        ...this.customer,
        customerType: this.customer.customerType && Object.keys(CustomerType).find(key => this.customer.customerType === CustomerType[key]),
        identityType: this.customer.identityType && Object.keys(IdentityType).find(key => this.customer.identityType === IdentityType[key]),
        status: this.customer.status && Object.keys(CustomerStatus).find(key => this.customer.status === CustomerStatus[key]),
        registrationDate: this.customer.registrationDate && new Date(this.customer.registrationDate)
      } as Customer;
    } else {
      this.formCustomer = {} as Customer;
    }
  }

  saveCustomer(): void {
    this.save.emit(this.customer);
    this.customer = {} as Customer;
  }

  goBackToList(): void {
    this.goBack.emit();
  }

}
