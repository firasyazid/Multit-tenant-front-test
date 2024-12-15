import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = 'https://multit-tenant-back-test.onrender.com/api/v1/restaurants'; // Updated to Render URL

  constructor(private http: HttpClient) {}

  // Fetch a restaurant by its subdomain
  getRestaurantBySubdomain(subdomain: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${subdomain}`);
  }
}
