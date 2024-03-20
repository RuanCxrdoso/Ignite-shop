import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "@/src/lib/stripe"
import { useState } from "react"
import Stripe from "stripe"
import Image from "next/image"
import axios from "axios"

interface productDetailsType {
  productDetail: {
      id: string
      name: string
      imageUrl: string
      price: string
      description: string
      priceId: string
  }
}

export default function Product({ productDetail }: productDetailsType) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleProductBuy() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkoutSession', {
        priceId: productDetail.priceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={productDetail.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{productDetail.name}</h1>
        <span>{productDetail.price}</span>

        <p>{productDetail.description}</p>

        <button disabled={isCreatingCheckoutSession} onClick={handleProductBuy}>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_PjkCw4JjzQebc4' } },
      { params: { id: 'prod_PjkC1uts9H3OZo' } },
      { params: { id: 'prod_PjkBxwhun0WPSx' } },
      { params: { id: 'prod_Pjk9HX6UY8df0q' } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  const productDetail = {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price.unit_amount / 100),
    description: product.description,
    priceId: price.id
  }

  return {
    props: {
      productDetail
    },
    revalidate: 60 * 60 * 1,
  }
}
