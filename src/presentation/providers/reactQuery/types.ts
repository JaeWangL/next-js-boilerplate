import type { DehydratedState } from '@tanstack/react-query';

export type ReactQueryProviderProps = {
  children: JSX.Element;
};

export type QueryHydrateProviderProps = {
  dehydratedState: DehydratedState;
  children: JSX.Element;
};
