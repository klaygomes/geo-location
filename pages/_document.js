import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='preload' href='https://cdn.polyfill.io/v2/polyfill.min.js' as='script' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.css' />
          <link href='https://fonts.googleapis.com/css?family=Montserrat:100,300,700,900' rel='stylesheet' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <script src='https://cdn.polyfill.io/v2/polyfill.min.js' defer='' />
          <NextScript />
        </body>
      </html>
    )
  }
}
