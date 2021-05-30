import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <title>Sortify your links today!</title>
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700"
            rel="stylesheet"
          />
          <link href="/favicon-32x32.png" rel="icon" />
          <meta content="Shortify" name="description" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
