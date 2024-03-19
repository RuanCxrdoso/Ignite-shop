import Image from "next/image";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        {/* <Image src={} alt=""/> */}
      </ImageContainer>

      <p>
        Parabéns pela aquisição <strong>*nome do cliente*</strong>! Sua <strong>*nome da camisa*</strong> será enviada logo logo !
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}
