import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'

import { CartContext, CartProvider } from '../context/cart'

export default function Layout({ children }: any) {
  const currentUrl = useRouter().asPath

  React.useEffect(() => {
    if (localStorage.getItem('douple-studio-cart') === null)
      localStorage.setItem('douple-studio-cart', JSON.stringify([]))
  }, [])

  return (
    <>
      <Head>
        <title>Douple Studio</title>
        {/* <meta name="description" content="Generated by create next app" />*/}
        <link rel="icon" type="image/png" href="https://firebasestorage.googleapis.com/v0/b/douple-studio.appspot.com/o/logo%2Flogo-icon_white.png?alt=media&token=5aa8e8ee-1d58-4b01-bfbf-8bbadc386e53" />
      </Head>
      <CartProvider>
        <Header />
        {currentUrl !== "/" && <Breadcrumb />}
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </>
  )
}