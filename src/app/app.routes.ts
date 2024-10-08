import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';


export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'profile', component: SecondPageComponent}
];
