import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { ModelList } from 'src/app/shared/models/model';
import { ModelService } from 'src/app/shared/services/modelService/model.service';

@Component({
  templateUrl: './models-dashboard.component.html',
  styleUrls: ['./models-dashboard.component.scss']
})
export class ModelsDashboardComponent implements OnInit {
  modelListModel: ListResponseModel<ModelList> = {
    index: 0,
    size: 10,
    items: []
  };
  dataLoaded: boolean = false;

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    this.getModelList();
  }

  getModelList() {
    this.modelService
      .getList(this.modelListModel.index, this.modelListModel.size)
      .subscribe(response => {
        this.modelListModel = response;
        this.dataLoaded = true;
      });
  }
}
