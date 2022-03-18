import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { AdminDashboardMenuComponent } from './features/admin/pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu.component';
import { AdminDashboardMenuItemComponent } from './features/admin/pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu-item/admin-dashboard-menu-item.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandFilterBarComponent } from './features/rentals/components/brand-filter-bar/brand-filter-bar.component';
import { BrandListComponent } from './features/rentals/components/brand-list/brand-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { CoreReducers } from './core/store/core.reducer';
import { FilterBrandsPipe } from './features/rentals/pipes/filter-brands.pipe';
import { FilterFuelsPipe } from './features/rentals/pipes/filter-fuels.pipe';
import { FilterModelListPipe } from './features/rentals/pipes/filter-models-list.pipe';
import { FilterTransmissionsPipe } from './features/rentals/pipes/filter-transmissions.pipe';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomepageComponent } from './features/rentals/pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ListboxModule } from 'primeng/listbox';
import { LoadingSpinnerComponent } from './features/rentals/components/loading-spinner/loading-spinner.component';
import { LoginComponent } from './core/pages/login/login.component';
import { ModelCardComponent } from './features/rentals/components/model-card/model-card.component';
import { ModelListComponent } from './features/rentals/components/models-list/models-list.component';
import { ModelsDashboardComponent } from './features/admin/pages/models-dashboard/models-dashboard.component';
import { ModelsDashboardModelFormComponent } from './features/admin/pages/models-dashboard/models-dashboard-model-form/models-dashboard-model-form.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { OverlayComponent } from './features/rentals/pages/homepage/overlay/overlay.component';
import { PasswordInputComponent } from './core/components/password-input/password-input.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { ColorListComponent } from './features/rentals/components/color-list/color-list.component';
import { ColorPipe } from './features/rentals/pipes/color.pipe';
import { FilterColorsPipe } from './features/rentals/pipes/filter-colors.pipe';
import { BrandsDashboardComponent } from './features/admin/pages/brands-dashboard/brands-dashboard.component';
import { BrandAddFormComponent } from './features/admin/pages/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './features/admin/pages/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { ColorsDashboardComponent } from './features/admin/pages/colors-dashboard/colors-dashboard.component';
import { CarsDashboardComponent } from './features/admin/pages/cars-dashboard/cars-dashboard.component';
import { CarAddFormComponent } from './features/admin/pages/cars-dashboard/car-add-form/car-add-form.component';
import { CarEditFormComponent } from './features/admin/pages/cars-dashboard/car-edit-form/car-edit-form.component';
import { ColorAddFormComponent } from './features/admin/pages/colors-dashboard/color-add-form/color-add-form.component';
import { ColorEditFormComponent } from './features/admin/pages/colors-dashboard/color-edit-form/color-edit-form.component';
import { TransmissionDashboardComponent } from './features/admin/pages/transmission-dashboard/transmission-dashboard.component';
import { TransmissionAddFormComponent } from './features/admin/pages/transmission-dashboard/transmission-add-form/transmission-add-form.component';
import { TransmissionEditFormComponent } from './features/admin/pages/transmission-dashboard/transmission-edit-form/transmission-edit-form.component';
import { LoadingspinnerComponent } from './core/components/loadingspinner/loadingspinner.component';
import { HoverDirective } from './core/directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    OverlayComponent,
    BrandFilterBarComponent,
    LoadingSpinnerComponent,
    ModelListComponent,
    ModelCardComponent,
    LoginComponent,
    FilterModelListPipe,
    PasswordInputComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminDashboardMenuComponent,
    AdminDashboardMenuItemComponent,
    ModelsDashboardComponent,
    ModelsDashboardModelFormComponent,
    FilterBrandsPipe,
    FilterFuelsPipe,
    FilterTransmissionsPipe,
    ColorListComponent,
    ColorPipe,
    FilterColorsPipe,
    BrandsDashboardComponent,
    BrandAddFormComponent,
    BrandEditFormComponent,
    ColorsDashboardComponent,
    CarsDashboardComponent,
    CarAddFormComponent,
    CarEditFormComponent,
    ColorAddFormComponent,
    ColorEditFormComponent,
    TransmissionDashboardComponent,
    TransmissionAddFormComponent,
    TransmissionEditFormComponent,
    LoadingspinnerComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ListboxModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: [],
        disallowedRoutes: []
      }
    }),
    StoreModule.forRoot(CoreReducers)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
