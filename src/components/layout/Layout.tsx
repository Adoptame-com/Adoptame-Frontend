"use client";
import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { defaultOverrides } from "next/dist/server/require-hook";

export type ProvidersProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: ProvidersProps) => {
  return (
    <div>hols</div>
  );
};

export default Layout;
