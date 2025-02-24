export interface UserLogin {
  username: string | null;
  password: string | null;
}

export interface UserSignup {
  username: string | null;
  password: string | null;
  confirmPassword: string | null;
}
