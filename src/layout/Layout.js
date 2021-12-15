import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children, t }) => {
  return (
    <Container>
      <Header t={t} />
      <main>{children}</main>
      <Footer t={t} />
    </Container>
  )
}
