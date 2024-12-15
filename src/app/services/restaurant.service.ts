import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {

  ///
  private apiUrl = 'https://multit-tenant-back-test.onrender.com/api/v1/restaurants';  
  constructor(private http: HttpClient) {}

   getRestaurantBySubdomain(subdomain: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${subdomain}`);
  }
}
