import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ModelListModel } from '../../models/modelModels/modelListModel';
import { ModelService } from './../../services/model.service';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelListComponent implements OnInit {
  modelList: ModelListModel[] = [];
  dataLoaded: boolean = false;

  @Input() modelFilterText: string = '';
  @Input() class: string = '';

  constructor(private modelService: ModelService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   if (params['brand']) this.getModelListByBrand(params['brand']);
    //   else this.getModelList();
    // }); todo

    this.getModelList();
  }

  getModelList() {
    this.modelService.getList(0, 6).subscribe(response => {
      this.modelList = response.items;
      this.dataLoaded = true;
    });
  }
}
