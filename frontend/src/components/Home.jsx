import React from 'react'
import NavbarOne from './shared/NavbarOne'
import { Herosection } from './Herosection'
import { CategoryCarousel } from './CategoryCarousel'

export const Home = () => {
  return (
    <div>
        <NavbarOne/>
        <Herosection/>
        <CategoryCarousel/>
    </div>
  )
}
