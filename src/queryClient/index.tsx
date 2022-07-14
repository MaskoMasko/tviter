import React from "react";
import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from "react-query";

export const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     structuralSharing: false,
  //   },
  // },
}) as any;

export const QueryClientProvider = ({ children }: any) => {
  return (
    <RQQueryClientProvider client={queryClient}>
      {children}
    </RQQueryClientProvider>
  );
};
