import type { GriffelRenderer } from '@fluentui/react-components';
import { FluentUIProvider } from '@presentation/providers/fluentUI';
import type { AppProps } from 'next/app';
import { ToastProvider } from '../presentation/providers/toast';

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

function MyApp({
  Component,
  pageProps,
  renderer = undefined,
}: EnhancedAppProps): JSX.Element {
  return (
    <ToastProvider>
      <FluentUIProvider renderer={renderer}>
        <Component {...pageProps} />
      </FluentUIProvider>
    </ToastProvider>
  );
}

export default MyApp;
