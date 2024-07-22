import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Import your Apollo Client configuration
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/body/Content'; // Import the Main component

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Content />
      <Footer />
    </ApolloProvider>
  );
};

export default App;