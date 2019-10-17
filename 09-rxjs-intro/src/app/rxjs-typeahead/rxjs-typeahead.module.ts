import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RxjsCountrySearchService } from 'src/app/rxjs-typeahead/rxjs-country-search.service';
import { RxjsTypeaheadComponent } from 'src/app/rxjs-typeahead/rxjs-typeahead.component';


@NgModule({
  declarations: [RxjsTypeaheadComponent],
  exports: [RxjsTypeaheadComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RxjsCountrySearchService]
})
export class RxjsTypeaheadModule { }
