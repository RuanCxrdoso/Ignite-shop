import { styled } from ".."

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const Footer = styled('footer', {
  alignSelf: 'center',

  padding: '1rem 0',

  p: {
    fontStyle: 'italic',
  },

  a: {
    textDecoration: 'none',
    fontStyle: 'italic',
  },

  'a:first-child': {
    color: '#F2A900'
  },

  'a:last-child': {
    color: '#8234E9'
  }
})
