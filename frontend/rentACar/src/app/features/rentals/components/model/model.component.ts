import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listReponseModel';
import { ModelListModel } from '../../models/modelListModel';
import { ModelService } from '../../services/model.service';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  models:ListResponseModel<ModelListModel>={items:[]}
  selectedModel : ModelListModel
  constructor(private modelService : ModelService) { }

  ngOnInit(): void {
    this.getModels();
  }
    getModels(){
    this.modelService.getModels(0,100).subscribe(data =>{
     this.models= data
    })
  }
}
