import {
  createDOMRenderer,
  FluentProvider,
  RendererProvider,
  SSRProvider,
  webDarkTheme,
} from '@fluentui/react-components';
import type { FluentUIProviderProps } from './types';

export function FluentUIProvider(props: FluentUIProviderProps): JSX.Element {
  const { children, renderer } = props;

  return (
    // Accepts a renderer from <Document /> or creates a default one
    // Also triggers rehydration a client
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={webDarkTheme}>{children}</FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
