import { CarState } from "src/app/core/models/enum/carState";

export interface Car {
  id: number;
  modelId:number;
  coloId:number;
  plate :string;
  kilometer : number;
  modelYear:number;
  rentalBranchId : number;
  CarState :CarState;
  minFindeksCreditRate : number;

}
