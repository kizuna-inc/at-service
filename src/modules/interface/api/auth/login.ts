export interface loginInterface {
  username: string;
  password: string;
}

export interface loginDetailInterface {
  username: string;
  detail: {
    name: string;
    role: "user" | "admin" | "staff";
  };
}
