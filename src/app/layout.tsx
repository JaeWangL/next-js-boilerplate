import { DialogProvider } from '@presentation/providers/dialog';
import { EmotionProvider } from '@presentation/providers/emotion';
import { ReactQueryProvider } from '@presentation/providers/reactQuery';
import { StoreProvider } from '@presentation/providers/redux';
import { ToastProvider } from '@presentation/providers/toast';
import type { Metadata } from 'next';
import type { RootLayoutProps } from './types';

export const metadata: Metadata = {
  title: 'next-js-boilerplate',
  description: 'next-js-boilerplate',
};

function RootLayout(props: RootLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <html lang="ko">
      {/* It's important to keep a head tag, even if it's empty */}
      <head />
      {/* TODO: Add font class in `body` */}
      <body>
        <ReactQueryProvider>
          <StoreProvider>
            <DialogProvider>
              <ToastProvider>
                <EmotionProvider>{children}</EmotionProvider>
              </ToastProvider>
            </DialogProvider>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;
