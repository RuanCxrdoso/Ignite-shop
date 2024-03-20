import type { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '@/src/assets/logo.svg'
import { Header, Container, Footer } from "../styles/pages/app"
import Image from "next/image"
import Link from "next/link"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href='/'>
          <Image src={logoImg} alt="" />
        </Link>
      </Header>

      <Component {...pageProps} />

      <Footer>
        <p>Desenvolvido por <a href="https://rcardoso.vercel.app" target="_blank">Ruan</a> e <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a> !</p>
      </Footer>
    </Container>
  )
}
