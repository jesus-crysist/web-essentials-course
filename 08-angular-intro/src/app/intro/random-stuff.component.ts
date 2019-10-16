import { Component, OnInit } from '@angular/core';
import { RandomNumberFactsService } from 'src/app/intro/random-number-facts.service';

@Component({
  selector: 'app-random-stuff',
  templateUrl: './random-stuff.component.html',
  styleUrls: ['./random-stuff.component.css']
})
export class RandomStuffComponent {

  numberInput: number;
  typeInput: string;
  trivia: string;
  error: string;

  joke: string;

  constructor(
    private numberFactsService: RandomNumberFactsService
  ) { }

  getNumberTrivia(): void {

    if (typeof this.numberInput !== 'number') {
      this.error = 'You have to enter number for this to work!';
      return;
    }

    this.error = null;

    this.numberFactsService.getNumberTrivia(this.numberInput, this.typeInput)
      .subscribe(trivia => this.trivia = trivia);
  }

  getRandomTrivia(): void {
    this.error = null;

    this.numberFactsService.getRandomTrivia()
      .subscribe(trivia => this.trivia = trivia);
  }
}
