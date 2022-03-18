import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { FooterComponent } from 'src/app/shared/layouts/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/layouts/navbar/navbar.component';
import { FilterAdditionalServicesPipe } from './pipes/filterAdditionalServices/filter-additional-services.pipe';
import { FilterBrandsPipe } from 'src/app/shared/pipes/filterBrands/filter-brands.pipe';
import { FilterCitiesPipe } from 'src/app/shared/pipes/filterCities/filter-cities.pipe';
import { FilterColorsPipe } from 'src/app/shared/pipes/filterColors/filter-colors.pipe';
import { FilterFuelsPipe } from 'src/app/shared/pipes/filterFuels/filter-fuels.pipe';
import { FilterModelListPipe } from 'src/app/shared/pipes/filterModels/filter-models-list.pipe';
import { FilterRentalBranchesPipe } from 'src/app/shared/pipes/filterRentalBranch/filter-rental-branches.pipe';
import { FilterTransmissionsPipe } from 'src/app/shared/pipes/filterTransmissions/filter-transmissions.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FilterAdditionalServicesPipe,
    FilterBrandsPipe,
    FilterCitiesPipe,
    FilterColorsPipe,
    FilterFuelsPipe,
    FilterModelListPipe,
    FilterRentalBranchesPipe,
    FilterTransmissionsPipe
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, CoreModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    FilterAdditionalServicesPipe,
    FilterBrandsPipe,
    FilterCitiesPipe,
    FilterColorsPipe,
    FilterFuelsPipe,
    FilterModelListPipe,
    FilterRentalBranchesPipe,
    FilterTransmissionsPipe
  ]
})
export class SharedModule {}
