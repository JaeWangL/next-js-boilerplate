/* eslint-disable no-param-reassign */
import {
  createDOMRenderer,
  renderToStyleElements,
} from '@fluentui/react-components';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // Creates a renderer that will be used for SSR
    const renderer = createDOMRenderer();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): DocumentInitialProps | Promise<DocumentInitialProps> =>
      originalRenderPage({
        enhanceApp: (App) =>
          function EnhancedApp(props) {
            const enhancedProps = {
              ...props,
              // This is required to provide a proper renderer instance
              renderer,
            };

            return <App {...enhancedProps} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);
    const styles = renderToStyleElements(renderer);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* Adding Fluent UI styles elements to output */}
          {styles}
        </>
      ),
    };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
