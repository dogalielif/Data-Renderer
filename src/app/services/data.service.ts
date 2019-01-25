import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    
    private dataUrl = 'assets/data.json';
    
    constructor( private http: HttpClient) {}
 /**
   * This method used for getting data from server
   *
   * 
   */
    getData(): Observable<Object> {
        return this.http.get(this.dataUrl);
      }
}