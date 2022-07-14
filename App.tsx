import React from "react";
import { QueryClientProvider } from "~/queryClient";
import { Router } from "./src/navigation/Router";

export default function App() {
  return (
    <QueryClientProvider>
      <Router />
    </QueryClientProvider>
  );
}
