import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dogs, MyDog } from './select-async.models';

@Injectable()
export class SelectAsyncService {

  constructor(
    private http: HttpClient
  ) { }

  dogsList(): Observable<Dogs> {
    // https://gist.github.com/howdy39/c354394f8abfe006346298015b833dd3
    return this.http.get<Dogs>('https://rawgit.com/howdy39/c354394f8abfe006346298015b833dd3/raw/065938b5d633d7889d67e7e1eda656e17512309a/dogs.json');
  }

  myDog(): Observable<MyDog> {
    // https://gist.github.com/howdy39/067da47a56dc4644a8fe7c67cbb8d7ae
    return this.http.get<MyDog>('https://rawgit.com/howdy39/067da47a56dc4644a8fe7c67cbb8d7ae/raw/394190bcf11d1f6ead2697dd3e617e4180153dd4/mydog.json');
  }

}
