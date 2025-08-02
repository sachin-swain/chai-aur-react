import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
      <>
      <header/>
      <Outlet/> 
      <footer/>
      </>
    )
}

export default Layout
