import React from "react";
import { Router } from "./src/navigation/Router";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     structuralSharing: false,
    //   },
    // },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
