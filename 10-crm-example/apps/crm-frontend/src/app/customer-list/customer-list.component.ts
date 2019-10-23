import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '@crm-example/api-interfaces';

@Component({
  selector: 'crm-example-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input() customerList: Array<Customer>;

  @Output() search: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Output() addEdit: EventEmitter<number> = new EventEmitter<number>();

  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      name: [null],
      identityNumber: [null]
    });
  }

  filterCustomers(): void {
    this.search.emit(this.filterForm.value);
  }

  clearFilters(): void {
    this.filterForm.reset();
    this.search.emit();
  }

  goToCustomerForm(customerId?: number): void {
    this.addEdit.emit(customerId);
  }
}
