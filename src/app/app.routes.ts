import { Routes } from '@angular/router';
import { HomePageComponent } from './components/www/home-page/home-page.component';
import { BuyPageComponent } from './components/www/buy-page/buy-page.component';
import { RentPageComponent } from './components/www/rent-page/rent-page.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'buy', component: BuyPageComponent},
    {path: 'rent', component: RentPageComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
