import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NonRxjsCountrySearchService } from 'src/app/non-rxjs-typeahead/non-rxjs-country-search.service';
import { NonRxjsTypeaheadComponent } from './non-rxjs-typeahead.component';


@NgModule({
  declarations: [NonRxjsTypeaheadComponent],
  exports: [NonRxjsTypeaheadComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [NonRxjsCountrySearchService]
})
export class NonRxjsTypeaheadModule { }
