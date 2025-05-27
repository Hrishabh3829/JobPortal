import React from 'react'
import NavbarOne from './shared/NavbarOne'
import { Herosection } from './Herosection'
import { CategoryCarousel } from './CategoryCarousel'
import { LatestJobs } from './LatestJobs'

export const Home = () => {
  return (
    <div>
        <NavbarOne/>
        <Herosection/>
        <CategoryCarousel/>
        <LatestJobs/>
    </div>
  )
}
