import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: '6px',
  border: '0',
  padding: '4px 8px',
})

export default function Home() {
  return <Button>Hello World !</Button>
}
