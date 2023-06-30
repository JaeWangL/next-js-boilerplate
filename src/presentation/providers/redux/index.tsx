'use client';

import { store } from '@application/store';
import { Provider } from 'react-redux';
import type { StoreProviderProps } from './types';

export function StoreProvider(props: StoreProviderProps): JSX.Element {
  const { children } = props;

  // TODO: Support Redux SSR (https://github.com/kirill-konshin/next-redux-wrapper/issues/547)
  return <Provider store={store}>{children}</Provider>;
}
