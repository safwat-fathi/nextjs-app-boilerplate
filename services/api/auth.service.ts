import { HttpService } from "@/services/base";
import {
  LoginRequest,
  LoginResponse,
  User,
  RegisterRequest,
} from "@/types/services/auth";

class AuthService extends HttpService<User> {
  constructor() {
    super("/auth");
  }

  async login(credentials: LoginRequest) {
    return this.post<LoginResponse>("/login", credentials);
  }

  async register(userData: RegisterRequest) {
    return this.post<LoginResponse>("/register", userData);
  }

  async logout() {
    return this.post("/logout", {});
  }

  async refreshToken() {
    return this.post<LoginResponse>("/refresh", {});
  }

  async getProfile() {
    return this.get<User>("/profile");
  }

  async updateProfile(data: Partial<User>) {
    return this.put<User>("/profile", data);
  }

  async resetPassword(token: string, password: string) {
    return this.post("/reset-password", { token, password });
  }
}

export default new AuthService();
