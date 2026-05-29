export type CredentialDataType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  success: boolean;
  message: string;
  data?: {
    token: string;
  };
};

export type UserLoginResponseType = {
  success: boolean;
  message: string;
  token?: string;
};

export type AdminLoginFormValues = {
  email: string;
  password: string;
  remember?: boolean;
};
