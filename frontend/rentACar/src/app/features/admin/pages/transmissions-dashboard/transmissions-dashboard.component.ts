import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Transmission } from 'src/app/shared/models/transmission';
import { TransmissionService } from 'src/app/shared/services/transmissionService/transmission.service';

@Component({
  selector: 'app-transmissions-dashboard',
  templateUrl: './transmissions-dashboard.component.html',
  styleUrls: ['./transmissions-dashboard.component.scss']
})
export class TransmissionsDashboardComponent implements OnInit {
  transmissionListModel: ListResponseModel<Transmission> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private transmissionService: TransmissionService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.transmissionService
      .getList(this.transmissionListModel.index, this.transmissionListModel.size)
      .subscribe(response => (this.transmissionListModel = response));
  }
}
