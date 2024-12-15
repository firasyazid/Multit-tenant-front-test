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
    const host = window.location.hostname; // Get the hostname, e.g., "testrestaurant.localhost"
    const subdomain = host.split('.')[0]; // Extract the subdomain: "testrestaurant"
  
    // Use the extracted subdomain to fetch restaurant data
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
