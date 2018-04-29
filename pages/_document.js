import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";

injectGlobal`
  html, 
  body {
    padding: 0;
    margin: 0;
  }

  * {
  box-sizing: border-box;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/assets/favicon.ico"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.10/css/solid.css"
            integrity="sha384-HTDlLIcgXajNzMJv5hiW5s2fwegQng6Hi+fN6t5VAcwO/9qbg2YEANIyKBlqLsiT"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.10/css/fontawesome.css"
            integrity="sha384-8WwquHbb2jqa7gKWSoAwbJBV2Q+/rQRss9UXL5wlvXOZfSodONmVnifo/+5xJIWX"
            crossorigin="anonymous"
          />{" "}
          <link
            href="https://fonts.googleapis.com/css?family=Delius+Swash+Caps"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
