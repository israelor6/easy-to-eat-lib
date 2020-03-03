export interface User {
  password?: string;
  name: string;
  email: string;
  phone: string;
  level?: number;
  creditCardToken: string;
  _id: string;
}
