import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </React.Fragment>
);
