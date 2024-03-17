import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 59,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea mollitia aperiam natus vero commodi a, sunt inventore perspiciatis quia quis veniam dolor iusto pariatur alias debitis magnam officiis esse.</p>

        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
