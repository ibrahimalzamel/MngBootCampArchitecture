import { Entity } from 'src/app/core/models/entity';
import { City } from '../enum/city';

export interface RentalBranch extends Entity {
  city: City;
}
