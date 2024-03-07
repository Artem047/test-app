import { ReactNode } from "react";

export interface IAuth {
    children: ReactNode;
    email: string;
    password: string;
  }