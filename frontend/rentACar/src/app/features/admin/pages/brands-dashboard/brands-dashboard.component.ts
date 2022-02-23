import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Brand } from 'src/app/features/rentals/models/brandModels/brand';
import { BrandService } from 'src/app/features/rentals/services/brand.service';

@Component({
  selector: 'app-brands-dashboard',
  templateUrl: './brands-dashboard.component.html',
  styleUrls: ['./brands-dashboard.component.css']
})
export class BrandsDashboardComponent implements OnInit {
  brands: ListResponseModel<Brand> = {
    index: 0,
    size: 10,
    items: []

  };
  dataLoaded: boolean = false;
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
 this.getBrandList();
  }
  getBrandList() {
    this.brandService
    .getList(this.brands.index,this.brands.size)
    .subscribe(data =>{
      this.brands=data;
      this.dataLoaded = true;

    })
  }
}
