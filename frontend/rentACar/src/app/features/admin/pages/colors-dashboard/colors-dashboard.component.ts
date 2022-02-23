import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Color } from 'src/app/features/rentals/models/colorModels/color';
import { ColorService } from 'src/app/features/rentals/services/color.service';

@Component({
  selector: 'app-colors-dashboard',
  templateUrl: './colors-dashboard.component.html',
  styleUrls: ['./colors-dashboard.component.css']
})
export class ColorsDashboardComponent implements OnInit {
  colors: ListResponseModel<Color> = {
    index: 0,
    size: 10,
    items: []

  };
  dataLoaded: boolean = false;
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColorList();
  }
 getColorList(){

  this.colorService
    .getList(this.colors.index,this.colors.size)
    .subscribe(data =>{
      this.colors=data;
      this.dataLoaded = true;

    })
 }
}
