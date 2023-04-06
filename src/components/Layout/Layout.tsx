import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps{
    children : ReactNode
}
export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
