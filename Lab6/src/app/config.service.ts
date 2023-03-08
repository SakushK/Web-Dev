import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }
  
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getDataDetail(a?:string): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/'+a);
  }
  getDataPhotos(a?:string): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/'+a+'/photos');
  }

}
