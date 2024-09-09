"use client";
import { Children } from "@/interfaces/common/Children";
import { NextUIProvider } from "@nextui-org/react";


const Providers = ({ children }: Children) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};

export default Providers;
