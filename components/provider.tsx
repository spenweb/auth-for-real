import React, { FC, PropsWithChildren } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
const NEXT_PUBLIC_AUTH0_CLIENT_ID =
  process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "";
const NEXT_PUBLIC_AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || "";
const NEXT_PUBLIC_AUTH0_AUDIENCE = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;
const NEXT_PUBLIC_AUTH0_SCOPE = process.env.NEXT_PUBLIC_AUTH0_SCOPE;

console.log(
  NEXT_PUBLIC_AUTH0_CLIENT_ID,
  NEXT_PUBLIC_AUTH0_DOMAIN,
  NEXT_PUBLIC_AUTH0_AUDIENCE,
  NEXT_PUBLIC_AUTH0_SCOPE
);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Auth0Provider
      domain={NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        audience: NEXT_PUBLIC_AUTH0_AUDIENCE,
        scope: NEXT_PUBLIC_AUTH0_SCOPE,
        redirect_uri: "http://localhost:3000",
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      useRefreshTokensFallback={false}
    >
      {children}
    </Auth0Provider>
  );
};
