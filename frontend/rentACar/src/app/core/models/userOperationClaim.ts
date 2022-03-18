import { Entity } from "./entity";

export interface UserOperationClaim extends Entity {
  userId: number;
  operationClaimId: number;
}
