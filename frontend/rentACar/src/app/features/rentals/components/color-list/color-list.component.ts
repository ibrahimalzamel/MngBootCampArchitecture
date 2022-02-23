import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Color } from '../../models/colorModels/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  colors :ListResponseModel<Color> ={items:[]};
  selectedColor!:Color ;
  constructor(private colorservice : ColorService) { }

  ngOnInit(): void {
    this.colorservice.getList(0,100).subscribe(data =>{
      this.colors=data ;
    })
  }

}
