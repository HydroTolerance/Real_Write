import React from 'react'
import Headbar from '../components/Headbar/Headbar'

export default function Layout({children}) {
  return (
    <>
        <Headbar/>
        <div>{children}</div>
    </>
  )
}
