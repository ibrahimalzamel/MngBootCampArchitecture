import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { ClaimGuard } from './core/guards/claim.guard';
import { HomepageComponent } from './features/rentals/pages/homepage/homepage.component';
import { LoginComponent } from './core/pages/login/login.component';
import { ModelsDashboardComponent } from './features/admin/pages/models-dashboard/models-dashboard.component';
import { ModelsDashboardModelFormComponent } from './features/admin/pages/models-dashboard/models-dashboard-model-form/models-dashboard-model-form.component';
import { NgModule } from '@angular/core';
import { ColorsDashboardComponent } from './features/admin/pages/colors-dashboard/colors-dashboard.component';
import { ColorAddFormComponent } from './features/admin/pages/colors-dashboard/color-add-form/color-add-form.component';
import { ColorEditFormComponent } from './features/admin/pages/colors-dashboard/color-edit-form/color-edit-form.component';
import { BrandsDashboardComponent } from './features/admin/pages/brands-dashboard/brands-dashboard.component';
import { BrandAddFormComponent } from './features/admin/pages/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './features/admin/pages/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { TransmissionDashboardComponent } from './features/admin/pages/transmission-dashboard/transmission-dashboard.component';
import { TransmissionAddFormComponent } from './features/admin/pages/transmission-dashboard/transmission-add-form/transmission-add-form.component';
import { TransmissionEditFormComponent } from './features/admin/pages/transmission-dashboard/transmission-edit-form/transmission-edit-form.component';
import { CarsDashboardComponent } from './features/admin/pages/cars-dashboard/cars-dashboard.component';
import { CarAddFormComponent } from './features/admin/pages/cars-dashboard/car-add-form/car-add-form.component';
import { CarEditFormComponent } from './features/admin/pages/cars-dashboard/car-edit-form/car-edit-form.component';
import { RegisterComponent } from './core/pages/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {path:'cars',component:CarsDashboardComponent},
  {
    path: 'models',
    component: ModelsDashboardComponent
  },
  {
    path: 'models/add',
    component: ModelsDashboardModelFormComponent
  },
  {
    path: 'models/edit/:id',
    component: ModelsDashboardModelFormComponent
  },
  {
    path:'brands',
    component:BrandsDashboardComponent
  },
  {
    path:'brands/add',
    component:BrandAddFormComponent
  },
  {
    path:'brands/edit/:id',
    component:BrandAddFormComponent
  },
  {
    path:'color',
    component:ColorsDashboardComponent
  },
  {
    path:'color/add',
    component:ColorAddFormComponent
  },
  {
    path:'color/edit/:id',
    component:ColorAddFormComponent
  },
  {
    path:'transmission',
    component:TransmissionDashboardComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [ClaimGuard],
    data: { requiredClaims: ['admin'] },
    children: [

     /*
           {
        path:'color',
        component:ColorsDashboardComponent
      },
      {
        path:'color/add',
        component:ColorAddFormComponent
      },
      {
        path:'color/edit/:id',
        component:ColorEditFormComponent
      },
      {
        path:'brand',
        component:BrandsDashboardComponent
      },
      {
        path:'brand/add',
        component:BrandAddFormComponent
      },
      {
        path:'brand/edit/:id',
        component:BrandEditFormComponent
      },

      ,
      {
        path:'transmission',
        component:TransmissionDashboardComponent
      },
      {
        path:'transmission/add',
        component:TransmissionAddFormComponent
      },
      {
        path:'transmission/edit/:id',
        component:TransmissionEditFormComponent
      },
      {
        path:'car',
        component:CarsDashboardComponent
      },
      {
        path:'car/add',
        component:CarAddFormComponent
      },
      {
        path:'car/edit/:id',
        component:CarEditFormComponent
      }

      */

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
