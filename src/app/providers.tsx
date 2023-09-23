"use client";

import { CartContextProvider } from "@/context/useCart";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
