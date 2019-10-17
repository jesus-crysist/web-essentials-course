import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NonRxjsTypeaheadModule } from 'src/app/non-rxjs-typeahead/non-rxjs-typeahead.module';
import { RxjsTypeaheadModule } from 'src/app/rxjs-typeahead/rxjs-typeahead.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NonRxjsTypeaheadModule,
    RxjsTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
