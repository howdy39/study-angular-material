import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dogs } from './select-validation.models';

@Injectable()
export class SelectValidationService {

  constructor(
    private http: HttpClient
  ) { }

  dogsList(): Observable<Dogs> {
    // https://gist.github.com/howdy39/c354394f8abfe006346298015b833dd3
    return this.http.get<Dogs>('https://rawgit.com/howdy39/c354394f8abfe006346298015b833dd3/raw/728d59f2388b1df189955db389306c7f142d757c/dogs.json');
  }

}
