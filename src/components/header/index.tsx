import React from 'react'
import { Header } from './style'

type Props = {
  children: JSX.Element
}
const index = ({children}:Props) => {
  return (
    <Header>{children}</Header>
  )
}

export default index