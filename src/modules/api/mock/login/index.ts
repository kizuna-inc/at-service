import type {
  loginDetailInterface,
  loginInterface,
} from "@/modules/interface/api/auth/login";
import { ApiResponse } from "../responseClass";
import { mock_login_db } from "./db";

export const login = async (
  body: loginInterface,
): Promise<ApiResponse<loginDetailInterface>> => {
  const user = mock_login_db.find(
    (item) =>
      item.username === body.username && item.password === body.password,
  );

  if (!user) {
    return ApiResponse.error<loginDetailInterface>(
      "Invalid username or password",
      401,
    );
  }

  return ApiResponse.ok<loginDetailInterface>(
    {
      username: user.username,
      detail: user.detail,
    },
    "Login successful",
    200,
  );
};
