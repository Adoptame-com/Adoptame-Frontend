"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export type ProvidersProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: ProvidersProps) => {
  return (
    <NextUIProvider>
      <div>{children}</div>
    </NextUIProvider>
  );
};

export default Layout;
