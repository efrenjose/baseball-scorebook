import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'http://localhost:3000/lineups/';

@Injectable({
  providedIn: 'root'
})
export class LineupService {

  constructor(private http: Http ) { }

  get() {
    return this.http.get(BASE_URL)
      .pipe(map(res => res.json()));
  }
}
