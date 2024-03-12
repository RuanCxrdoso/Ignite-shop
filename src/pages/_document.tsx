import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        {/* Onde o next irá renderizar todo o conteúdo principal da página */}
        <Main />

        {/* Onde o next irá carregar todo o script necessário */}
        <NextScript />
      </body>
    </Html>
  )
}
