import { Routes } from '@angular/router';
import {CreationComponent} from "./creation/creation/creation.component";
import {RegistrationComponent} from "./registration/registration/registration.component";

export const routes: Routes = [
  {path:'',redirectTo:'creation',pathMatch:'full'},
  {path:'creation',loadChildren: () => import('../app/creation/creation.module').then(m => m.CreationModule)},
  {path:'registration',loadChildren: () => import('../app/registration/registration.module').then(m => m.RegistrationModule)},
  {path:'rating',loadChildren: () => import('../app/rating/rating.module').then(m => m.RatingModule)},
];
