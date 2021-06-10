export interface Registration {
  id: number;
  first_name: string;
  last_name: string;
  Type: string;
  age: number;
  address: string;
  country: string;
  state: string;
  email: string;
  hobbie: string;
  password: string;
  Conform_password: string;
  phone_number: string;
}

export interface Jobs {
  id: number;
  Company_Name: string;
  Role: string;
  Skills: string;
  date: string;
}
export interface ContactUs {
  id: number;
  name: string;
  email: string;
  message: string;
}
