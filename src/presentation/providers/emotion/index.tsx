import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import type { EmotionProviderProps } from './types';

export function EmotionProvider(props: EmotionProviderProps): JSX.Element {
  const { children } = props;

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'next-js' }}>
      {children}
    </NextAppDirEmotionCacheProvider>
  );
}
