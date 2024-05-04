import { createContext } from "react";

export interface LoginData {
  username: string;
  password: string;
}

export class EmptyLoginData implements LoginData {
  username = "My mom";
  password = "fhskfhsdsdlkj";
}

export type LoginContextType = {
  loginData: LoginData;
  setLoginData: (ld: LoginData) => void;
  onLogin: () => void;
  onLogout: () => void;
};

export const LoginContext = createContext<LoginContextType | null>(null);
