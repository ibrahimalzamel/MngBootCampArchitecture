import { Entity } from 'src/app/core/models/entity';

export interface CorporateCustomer extends Entity {
  customerId: number;
  companyName: string;
  taxNo: string;
}
