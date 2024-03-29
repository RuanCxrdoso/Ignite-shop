import Image from "next/image"
import Head from "next/head"
import { HomeContainer, Product } from "../styles/pages/home"
import { GetStaticProps } from "next"
import { stripe } from "../lib/stripe"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Stripe from "stripe"
import Link from "next/link"

interface productsTypes {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: productsTypes) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {
          products.map((product) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                <Product className="keen-slider__slide" >
                  <Image src={product.imageUrl} width={520} height={480} alt="" />
          
                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Product>
              </Link>
            )
          })
        }
      </HomeContainer>
    </>
  )
}

// Utilizando SSG para a Home, as props retornadas são coletadas no componente da page
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100) : 'R$ 99,90',
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // A cada duas horas será gerada e armazenada em cache uma nova static page
  }
}
