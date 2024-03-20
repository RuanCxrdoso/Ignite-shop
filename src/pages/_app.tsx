import type { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '@/src/assets/logo.svg'
import { Header, Container } from "../styles/pages/app"
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
    </Container>
  )
}
