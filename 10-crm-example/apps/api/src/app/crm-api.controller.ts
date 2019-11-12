import { Customer } from '@crm-example/api-interfaces';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CrmApiService } from './crm-api.service';

@Controller('customers')
export class CrmApiController {
  constructor(private readonly crmApiService: CrmApiService) {}

  @Get('all')
  getData(): Array<Customer> {
    return this.crmApiService.getAllCustomers();
  }

  @Get('search')
  searchForCustomers(@Query() query: any): Array<Customer> {
    return this.crmApiService.searchCustomer(query);
  }

  @Get(':customerId')
  getCustomerById(@Param('customerId') customerId: string): Customer {
    return this.crmApiService.getCustomerById(+customerId);
  }

  @Post('')
  addCustomer(@Body() customer: Customer): Customer {
    return this.crmApiService.addCustomer(customer);
  }
}
