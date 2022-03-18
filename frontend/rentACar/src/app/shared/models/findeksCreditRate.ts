import { Entity } from 'src/app/core/models/entity';

export interface FindeksCreditRate extends Entity {
  customerId: number;
  score: number;
}
