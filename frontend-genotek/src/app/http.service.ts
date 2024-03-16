import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private API_URL = 'http://localhost:3010';

  constructor(private http: HttpClient) {}

  getNames(page, limit): Observable<any> {
    const params = new HttpParams({ fromObject: { page, limit} });
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.http.get(`${this.API_URL}/api/namedata/${page}`, {params , headers});
  }
}
