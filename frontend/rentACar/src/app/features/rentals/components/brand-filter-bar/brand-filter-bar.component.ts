import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Brand } from '../../models/brand';
import { BrandService } from './../../services/brand.service';

@Component({
  selector: 'app-brand-filter-bar',
  templateUrl: './brand-filter-bar.component.html',
  styleUrls: ['./brand-filter-bar.component.scss']
})
export class BrandFilterBarComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded: boolean = false;
  activeBrandName?: string;
  filterText: string = '';

  constructor(
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getActiveBrandFromParam();
  }

  getActiveBrandFromParam() {
    this.activatedRoute.params.subscribe(params => {
      if (params['brandName']) this.setActiveBrand(params['brandName']);
    });
  }

  setActiveBrand(brandName?: string) {
    this.activeBrandName = brandName;
  }

  getBrands() {
    this.brandService.getList(0, 5).subscribe(response => {
      this.brands = response.items;
      this.dataLoaded = true;
    });
  }

  isActive(brandName?: string): string {
    return this.activeBrandName == brandName ? 'btn-primary' : '';
  }

  routeToModelsByBrand(event: any) {
    let targetValue: string = event.target.value;

    if (!targetValue) {
      this.setActiveBrand();
      this.router.navigateByUrl('');
    } else {
      this.setActiveBrand(targetValue);
      this.router.navigateByUrl(`/models/brand/${this.activeBrandName}`);
    }
  }

  isSelected(brandName?: string): boolean {
    return this.activeBrandName == brandName;
  }
}
