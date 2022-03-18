import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdditionalServicesDashboardFormComponent } from 'src/app/features/admin/pages/additional-service-dashboard/additional-service-dashboard-form/additional-service-dashboard-form.component';
import { AdditionalServicesDashboardComponent } from 'src/app/features/admin/pages/additional-service-dashboard/additional-service-dashboard.component';
import { AdminDashboardMenuItemComponent } from 'src/app/features/admin/pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu-item/admin-dashboard-menu-item.component';
import { AdminDashboardMenuComponent } from 'src/app/features/admin/pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu.component';
import { AdminDashboardComponent } from 'src/app/features/admin/pages/admin-dashboard/admin-dashboard.component';
import { BrandsDashboardFormComponent } from 'src/app/features/admin/pages/brands-dashboard/brands-dashboard-form/brands-dashboard-form.component';
import { BrandsDashboardComponent } from 'src/app/features/admin/pages/brands-dashboard/brands-dashboard.component';
import { CarDamagesDashboardFormComponent } from 'src/app/features/admin/pages/car-damages-dashboard/car-damages-dashboard-form/car-damages-dashboard-form.component';
import { CarDamagesDashboardComponent } from 'src/app/features/admin/pages/car-damages-dashboard/car-damages-dashboard.component';
import { CarsDashboardFormComponent } from 'src/app/features/admin/pages/cars-dashboard/cars-dashboard-form/cars-dashboard-form.component';
import { CarsDashboardComponent } from 'src/app/features/admin/pages/cars-dashboard/cars-dashboard.component';
import { ColorsDashboardFormComponent } from 'src/app/features/admin/pages/colors-dashboard/colors-dashboard-form/colors-dashboard-form.component';
import { ColorsDashboardComponent } from 'src/app/features/admin/pages/colors-dashboard/colors-dashboard.component';
import { FuelsDashboardFormComponent } from 'src/app/features/admin/pages/fuels-dashboard/fuels-dashboard-form/fuels-dashboard-form.component';
import { FuelsDashboardComponent } from 'src/app/features/admin/pages/fuels-dashboard/fuels-dashboard.component';
import { ModelsDashboardFormComponent } from 'src/app/features/admin/pages/models-dashboard/models-dashboard-form/models-dashboard-form.component';
import { ModelsDashboardComponent } from 'src/app/features/admin/pages/models-dashboard/models-dashboard.component';
import { RentalBranchesDashboardFormComponent } from 'src/app/features/admin/pages/rental-branches-dashboard/rental-branches-dashboard-form/rental-branches-dashboard-form.component';
import { RentalBranchesDashboardComponent } from 'src/app/features/admin/pages/rental-branches-dashboard/rental-branches-dashboard.component';
import { RentalDashboardComponent } from 'src/app/features/admin/pages/rental-dashboard/rental-dashboard.component';
import { TransmissionsDashboardFormComponent } from 'src/app/features/admin/pages/transmissions-dashboard/transmissions-dashboard-form/transmissions-dashboard-form.component';
import { TransmissionsDashboardComponent } from 'src/app/features/admin/pages/transmissions-dashboard/transmissions-dashboard.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminDashboardMenuComponent,
    AdminDashboardMenuItemComponent,
    ModelsDashboardComponent,
    ModelsDashboardFormComponent,
    BrandsDashboardComponent,
    BrandsDashboardFormComponent,
    ColorsDashboardComponent,
    ColorsDashboardFormComponent,
    FuelsDashboardComponent,
    FuelsDashboardFormComponent,
    TransmissionsDashboardComponent,
    TransmissionsDashboardFormComponent,
    CarsDashboardComponent,
    CarsDashboardFormComponent,
    AdditionalServicesDashboardComponent,
    AdditionalServicesDashboardFormComponent,
    CarDamagesDashboardComponent,
    CarDamagesDashboardFormComponent,
    RentalBranchesDashboardComponent,
    RentalBranchesDashboardFormComponent,
    RentalDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    CheckboxModule,
    InputSwitchModule
  ]
})
export class AdminModule {}
