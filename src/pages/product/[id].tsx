import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { GetStaticProps } from "next"
import { stripe } from "@/src/lib/stripe"
import Stripe from "stripe"
import Image from "next/image"

interface productDetailsType {
  productDetail: {
      id: string
      name: string
      imageUrl: string
      price: string
      description: string
  }
}

export default function Product({ productDetail }: productDetailsType) {
  console.log(productDetail.description)

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={productDetail.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{productDetail.name}</h1>
        <span>{productDetail.price}</span>

        <p>{productDetail.description}</p>

        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
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
  }

  return {
    props: {
      productDetail
    },
    revalidate: 60 * 60 * 1,
  }
}
