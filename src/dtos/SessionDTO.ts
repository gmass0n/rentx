export interface SessionDTO {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
  };
}
