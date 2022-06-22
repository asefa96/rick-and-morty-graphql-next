import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { Head } from "next/document";
import React from "react";

function createLink(): ApolloLink {
  const { HttpLink } = require("@apollo/client/link/http");
  return new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
    credentials: "same-origin",
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = new ApolloClient({
    link: createLink(),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </ApolloProvider>
  );
}

export default MyApp;
