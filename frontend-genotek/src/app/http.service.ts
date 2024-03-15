import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private API_URL = 'http://localhost:3010';

  constructor(private http: HttpClient) {}

  getNames(page): Observable<any> {
    return this.http.get(`${this.API_URL}/api/namedata/${page}`, { headers : { 'Access-Control-Allow-Origin': '*'}});
  }
}
