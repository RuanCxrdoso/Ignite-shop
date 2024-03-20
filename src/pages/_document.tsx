import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="./../assets/logoIco.ico" type="image/x-icon" />
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }}></style>
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
