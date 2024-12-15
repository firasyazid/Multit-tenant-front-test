import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '', // Route par défaut
    component: RestaurantComponent,  
  },
  {
    path: '**', // Route pour les chemins non trouvés
    redirectTo: '', // Redirige vers la route par défaut
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
