import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { xanadu } from "../assets";

import { CredentialResponse } from "../interfaces/google";

// Todo: Update your Google Client ID here
const GOOGLE_CLIENT_ID =
  "1041339102270-e1fpe2b6v6u1didfndh7jkjmpcashs4f.apps.googleusercontent.com";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };

  return (
    <Container
      maxWidth={false}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle, rgba(173,178,255,1) 0%, rgba(89,107,234,1) 50%, rgba(5,9,82,1) 100%)"
      }}
    >
      <Box
        display="flex"
        gap="36px"
        justifyContent="center"
        flexDirection="column"
        style={{
          background: "#FCFCFC",
          padding: "35px 70px",
          borderRadius: "21px"
        }}
      >
        <div 
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <img src={ xanadu } alt="Xanadu logo" />
          <h1 
            style={{
              color: "#101010",
              fontSize: "41px",
          }}>
            Xanadu
          </h1>
        </div>

        <center><GoogleButton /></center>

        <Typography align="center" color= "#101010" fontSize="12px" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          Powered by
          <img
            style={{ padding: "0 5px"}}
            alt="Google"
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
        </Typography>
      </Box>
    </Container>
  );
};
