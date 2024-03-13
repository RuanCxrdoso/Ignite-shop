import type { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '@/src/assets/logo.svg'
import { Header, Container } from "../styles/pages/app"
import Image from "next/image"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
