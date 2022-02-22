import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Brand } from 'src/app/features/rentals/models/brand';
import { BrandService } from 'src/app/features/rentals/services/brand.service';

@Component({
  selector: 'app-brands-dashboard',
  templateUrl: './brands-dashboard.component.html',
  styleUrls: ['./brands-dashboard.component.css']
})
export class BrandsDashboardComponent implements OnInit {
  brands: ListResponseModel<Brand> = { items: [] };

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
 this.getAll();
  }
  getAll() {
    this.brandService.getList(0,100).subscribe
    (data =>{
      this.brands=data;
    })
  }
}
