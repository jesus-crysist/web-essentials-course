import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RandomNumberFactsService } from 'src/app/intro/random-number-facts.service';
import { RandomStuffComponent } from 'src/app/intro/random-stuff.component';


@NgModule({
  declarations: [RandomStuffComponent],
  exports: [RandomStuffComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RandomNumberFactsService]
})
export class IntroModule {
}
