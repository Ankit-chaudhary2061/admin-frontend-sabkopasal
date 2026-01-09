import { Status } from "./status-types";

export interface User {
  username: string |null;
  email: string | null;
  password: string | null;
  token: string | null;
}

export interface AuthState {
  user: User;
  status: Status;
  token:null |string
}
export interface ILoginData{
    email:string,
    password:string
}

