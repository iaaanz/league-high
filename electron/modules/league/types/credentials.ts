export type BaseCredentials = {
  port: number;
  address: string;
  username: string;
  password: string;
  protocol: string;
};

export type Credentials = BaseCredentials & {
  baseUrl: string;
  token: string;
};
