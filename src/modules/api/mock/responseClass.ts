export class ApiResponse<T = null> {
  status: number;
  success: boolean;
  message: string;
  data: T | null;

  constructor(
    status: number,
    message: string,
    data: T | null = null,
    success: boolean = status >= 200 && status < 300,
  ) {
    this.status = status;
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static ok<T>(data: T, message = "Success", status = 200): ApiResponse<T> {
    return new ApiResponse<T>(status, message, data, true);
  }

  static error<T = null>(
    message = "Error",
    status = 400,
    data: T | null = null,
  ): ApiResponse<T> {
    return new ApiResponse<T>(status, message, data, false);
  }
}
