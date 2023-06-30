import { DialogProvider } from '@presentation/providers/dialog';
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
      {/* TODO: Add font class in `body` */}
      <body>
        <ReactQueryProvider>
          <StoreProvider>
            <DialogProvider>
              <ToastProvider>{children}</ToastProvider>
            </DialogProvider>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;
