"use client";

// NextUIProvider is a wrapper around nextui component that takes care of react context state management in between
// nextui components
import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProp {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProp) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
