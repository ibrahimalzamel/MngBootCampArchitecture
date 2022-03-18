import { Entity } from 'src/app/core/models/entity';

export interface AdditionalService extends Entity {
  name: string;
  dailyPrice: number;
}
