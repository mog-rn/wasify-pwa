import React from 'react'
import { provider, signIn, getSession, csrfToken } from 'next-auth'
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Container,
  Stack,
} from "@chakra-ui/react";

const SignIn = (provider, csrfToken) => {
    return (
      <>
        {/}
      </>
    );
} 

SignIn.getInitialProps = async(context) => {
    const {req, res} = context;
    const session = await getSession({req});

    if (session && res && accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }
    return {
        session: undefined,
        providers: await providers(context),
        csrfToken: await csrfToken(context),
    }
}

export default SignIn