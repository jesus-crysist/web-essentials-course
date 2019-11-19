import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {
  CalendarModule,
  ChartModule,
  DropdownModule,
  EditorModule,
  InputSwitchModule,
  MessageService,
  ToolbarModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [AppComponent, CustomerListComponent, AddEditCustomerComponent],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,

    // PrimeNG modules
    ChartModule,
    EditorModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    DropdownModule,
    InputSwitchModule,
    CalendarModule,
    ToastModule
  ],
  providers: [CustomerService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
