import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient"; 
import Content from "./components/body/Content"; 
import PageWrapper from "./components/wrappers/PageWrapper";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <PageWrapper>
        <Content />
      </PageWrapper>
    </ApolloProvider>
  );
};

export default App;
