import { Component, OnInit } from '@angular/core';

import { Brand } from '../../models/brandModels/brand';
import { BrandService } from './../../services/brand.service';
import { ListResponseModel } from './../../../../core/models/listResponseModel';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  brands: ListResponseModel<Brand> = { items: [] };
  selectedBrand!: Brand;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService.getList(0, 100).subscribe
    (data => {
      this.brands = data;
    });
  }
}
