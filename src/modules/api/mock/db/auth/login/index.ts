import type { loginDetailInterface } from "@/modules/interface/api/auth/login";

interface loginInterface extends loginDetailInterface {
  password: string;
}

export const mock_login_db: loginInterface[] = [
  {
    username: "admin",
    password: "admin",
    detail: {
      name: "กิตติพงศ์ วัฒนากูล",
      role: "admin",
    },
  },
  {
    username: "staff",
    password: "staff",
    detail: {
      name: "ณัฐธิดา ศิริพรชัย",
      role: "staff",
    },
  },
  {
    username: "user",
    password: "user",
    detail: {
      name: "ธนกร จันทร์เพ็ญ",
      role: "user",
    },
  },
];
