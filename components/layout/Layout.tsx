"use client";
import React from "react";
import Button from "../ui/Buttons/Button";
import Login from "../pages/login/login";

export type ProvidersProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: ProvidersProps) => {
  return (
    <div>{children}</div>
  );
};

export default Layout;
