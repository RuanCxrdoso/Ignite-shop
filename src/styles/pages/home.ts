import { styled } from ".."

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: '656px'
})

export const Product = styled('span', {
  background: 'linear-gradient(180deg, #1ea483 0%, #6475d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: "absolute",
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})
