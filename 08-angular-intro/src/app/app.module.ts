import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IntroModule } from 'src/app/intro/intro.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
