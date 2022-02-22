import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { ClaimGuard } from './core/guards/claim.guard';
import { HomepageComponent } from './features/rentals/pages/homepage/homepage.component';
import { LoginComponent } from './core/pages/login/login.component';
import { ModelsDashboardComponent } from './features/admin/pages/models-dashboard/models-dashboard.component';
import { ModelsDashboardModelFormComponent } from './features/admin/pages/models-dashboard/models-dashboard-model-form/models-dashboard-model-form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [ClaimGuard],
    data: { requiredClaims: ['admin'] },
    children: [
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
