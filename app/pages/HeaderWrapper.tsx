'use client'

import React from 'react'
import { useRouter } from 'next/router'
import { Header } from '../components'

const HeaderWrapper: React.FC = () => {
    const routerPaths = useRouter();
    console.log(routerPaths)

  return (
    <Header routerPaths={routerPaths} />
  )
}

export default HeaderWrapper