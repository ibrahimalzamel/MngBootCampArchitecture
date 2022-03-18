import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Brand } from 'src/app/shared/models/brand';
import { BrandService } from 'src/app/shared/services/brandService/brand.service';

@Component({
  selector: 'app-brands-dashboard',
  templateUrl: './brands-dashboard.component.html',
  styleUrls: ['./brands-dashboard.component.scss']
})
export class BrandsDashboardComponent implements OnInit {
  brandListModel: ListResponseModel<Brand> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandService
      .getList(this.brandListModel.index, this.brandListModel.size)
      .subscribe(response => (this.brandListModel = response));
  }
}
