import { AccessToken } from "./accessToken";
import { Entity } from "./entity";


export interface User extends Entity {
  firstName: string;
  lastName: string;
  email: string;
  status: boolean;
}

export interface UserForUpdateFromAuthDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newPassword?: string;
}

export interface UpdatedUserFromAuthDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newPassword?: string;
  accessToken: AccessToken;
}
