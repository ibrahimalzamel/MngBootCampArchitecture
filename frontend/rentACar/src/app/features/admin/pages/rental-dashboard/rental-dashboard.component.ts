import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { RentalList } from 'src/app/shared/models/rental';
import { RentalService } from 'src/app/shared/services/rentalService/rental.service';

@Component({
  templateUrl: './rental-dashboard.component.html',
  styleUrls: ['./rental-dashboard.component.scss']
})
export class RentalDashboardComponent implements OnInit {
  rentalListModel: ListResponseModel<RentalList> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.rentalService
      .getList(this.rentalListModel.index, this.rentalListModel.size)
      .subscribe(response => (this.rentalListModel = response));
  }
}
