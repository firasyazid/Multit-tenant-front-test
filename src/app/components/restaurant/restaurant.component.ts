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
     const host = window.location.hostname;
  
     let subdomain: string | null = null;
  
     if (host !== 'multit-tenant-front-test.onrender.com') {
      subdomain = host.split('.')[0];  
    } else {
       subdomain = new URLSearchParams(window.location.search).get('subdomain');
    }
  
     if (!subdomain) {
      console.error('No subdomain provided!');
      return;
    }
  
     this.restaurantService.getRestaurantBySubdomain(subdomain).subscribe(
      (data) => {
        console.log('Fetched restaurant data:', data);
        this.restaurant = data;  
      },
      (error) => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }
  
  
  
  
}
