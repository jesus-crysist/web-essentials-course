import { Customer, CustomerStatus, IdentityType } from '@crm-example/api-interfaces';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CrmApiService {

  customerList: Array<Customer> = [
    {
      id: 100001,
      name: 'Marko',
      identityType: IdentityType.PASSPORT,
      identityNumber: '234343423423423',
      country: '\'Murica',
      citizen: false,
      registrationDate: new Date('2018-12-01'),
      status: CustomerStatus.CLOSED
    },
    {
      id: 100002,
      name: 'Janko',
      identityType: IdentityType.SSN,
      identityNumber: '123123123213',
      country: 'Serbistan',
      citizen: true,
      registrationDate: new Date('1991-03-23'),
      status: CustomerStatus.ACTIVE
    }
  ];

  getAllCustomers(): Array<Customer> {
    return this.customerList;
  }

  searchCustomer(query: any): Array<Customer> {

    const queryProps = Object.getOwnPropertyNames(query);
    let customerList = this.customerList;

    queryProps.forEach((prop: string) => customerList = this.searchCustomersByProperty(customerList, prop, query[prop]));

    return customerList;
  }

  getCustomerById(customerId: number): Customer {
    return this.customerList.find(c => c.id === customerId);
  }

  addCustomer(customer: Customer): Customer {

    if (!customer.name || !customer.status) {
      const missingValue = !customer.name ? 'name' : 'status';
      throw new HttpException(`Mandatory field "${missingValue}" is missing!`, HttpStatus.BAD_REQUEST);
    }

    const latestId = this.customerList[this.customerList.length - 1].id;

    this.customerList.push({...customer, id: (latestId + 1)});

    return customer;
  }

  updateCustomer(customer: Customer): Customer {

    if (!customer.id) {
      throw new HttpException('Customer ID is necessary to update customer data', HttpStatus.BAD_REQUEST);
    } else if (!customer.name || !customer.status) {
      const missingValue = !customer.name ? 'name' : 'status';
      throw new HttpException(`Mandatory field "${missingValue}" is missing!`, HttpStatus.BAD_REQUEST);
    }

    const existingCustomer = this.customerList.find(c => c.id === customer.id);
    const existingCustomerId = this.customerList.indexOf(existingCustomer);

    this.customerList.splice(existingCustomerId, 1, customer);

    return customer;
  }

  private searchCustomersByProperty(customerList: Array<Customer>, prop: string, value: string): Array<Customer> {

    return prop && value && value.length > 0 ?
           customerList.filter(
             c => typeof c[prop] === 'string' && c[prop].toUpperCase().indexOf(value.toUpperCase()) !== -1
           ) :
           customerList;
  }
}
