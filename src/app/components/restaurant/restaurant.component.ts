import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurant: any;

  constructor(private restaurantService: RestaurantService) {}
  ngOnInit(): void {
    // Get the hostname, e.g., "multit-tenant-front-test.onrender.com"
    const host = window.location.hostname;
  
    // Extract subdomain if it exists
    let subdomain: string | null = null;
  
    // For Render: check if the first part of the hostname is not the main domain
    if (host !== 'multit-tenant-front-test.onrender.com') {
      subdomain = host.split('.')[0]; // Extract the subdomain, e.g., "testrestaurant"
    } else {
      // Fallback to query parameter, e.g., "?subdomain=testrestaurant"
      subdomain = new URLSearchParams(window.location.search).get('subdomain');
    }
  
    // Handle cases where no subdomain is provided
    if (!subdomain) {
      console.error('No subdomain provided!');
      return;
    }
  
    // Fetch restaurant data using the subdomain
    this.restaurantService.getRestaurantBySubdomain(subdomain).subscribe(
      (data) => {
        console.log('Fetched restaurant data:', data);
        this.restaurant = data; // Bind the data to the component
      },
      (error) => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }
  
  
  
  
}
