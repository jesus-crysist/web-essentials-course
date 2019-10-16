import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RandomNumberFactsService {

  private readonly baseUrl: string = 'http://numbersapi.com';

  constructor(
    private http: HttpClient
  ) {
  }

  public getRandomTrivia(): Observable<string> {

    const url = `${this.baseUrl}/random/trivia?json`;

    return this.http.get<any>(url)
      .pipe(
        map(responseJson => responseJson.text)
      );
  }

  public getNumberTrivia(num: number, type?: string): Observable<string> {

    let url = `${this.baseUrl}/${num}`;

    if (type) {
      url = `${url}/${type}`;
    }

    url = `${url}?json`;

    return this.http.get<any>(url)
      .pipe(
        map(responseJson => responseJson.text)
      );
  }
}
