interface Address {
  street: string;
  suite: string;
  city: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface DettagliUser {
  phone: string;
  address: Address;
  company: Company;
  website: string;
}

export interface User {
  name: string;
  username: string;
  email: string;
  dettagli: DettagliUser;
  id: number;
}
