import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="mobile:w-fit">
      <Header />
      <main className="mobile:w-fit">
        {children}
      </main>
      <Footer />
    </div>
  );
}
