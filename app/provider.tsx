import React from "react";
import Header from "./_components/Header";

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Provider;
