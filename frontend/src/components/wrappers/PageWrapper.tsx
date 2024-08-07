import React, { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

// Define the props interface to include children
interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
