'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import type { ReactQueryProviderProps } from './types';

export function ReactQueryProvider(
  props: ReactQueryProviderProps
): JSX.Element {
  const { children } = props;

  // NOTE: If use in SSR, we should delcare `queryClient` with `useState`
  // to ensures that data is not shared between different users and requests
  // https://tanstack.com/query/v4/docs/react/guides/ssr
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
            useErrorBoundary: true,
          },
          mutations: {
            useErrorBoundary: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: Support React-Query SSR
      <Hydrate state={dehydratedState}>{children}</Hydrate>
  */}
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
