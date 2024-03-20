import Image from "next/image";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface productPurchaseDetailType {
  productPurchaseDetail: {
    customerName: string,
    product: {
      name: string,
      imageUrl: string
    }
  }
}

export default function Success({ productPurchaseDetail }: productPurchaseDetailType) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        <Image src={productPurchaseDetail.product.imageUrl} width={120} height={110} alt=""/>
      </ImageContainer>

      <p>
        Parabéns pela aquisição <strong>{productPurchaseDetail.customerName}</strong>! Sua <strong>{productPurchaseDetail.product.name}</strong> será enviada logo logo !
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    } 
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const product = session.line_items.data[0].price.product as Stripe.Product

  const productPurchaseDetail = {
    customerName: session.customer_details.name,
    product: {
      name: product.name,
      imageUrl: product.images[0]
    }
  }

  return {
    props: {
      productPurchaseDetail
    }
  }
}
