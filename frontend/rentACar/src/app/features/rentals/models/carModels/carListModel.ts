import { CarState } from "src/app/core/models/enum/carState";
import { City } from "src/app/core/models/enum/city";

export interface CarListModel {
  id: number;
  brandName:string;
  modelName:string;
  fuelName:string;
  colorName:string;
  carState :CarState;
  modelYear : number;
  plate :string;
  RentalBranchCity:City;
  kilometer:number;
  MinFindeksCreditRate:number;

}
