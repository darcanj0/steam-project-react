interface decodedJwt {
  id: string;
  is_admin: boolean;
  email: string;
  iat: number;
  exp: number;
}

export default decodedJwt;
