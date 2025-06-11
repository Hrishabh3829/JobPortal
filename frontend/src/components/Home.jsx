import React from 'react'
import NavbarOne from './shared/NavbarOne'
import { Herosection } from './Herosection'
import { CategoryCarousel } from './CategoryCarousel'
import { LatestJobs } from './LatestJobs'
import { Footer } from './Footer'
import { useGetAllJobs } from '@/hooks/useGetAllJobs'

export const Home = () => {
  useGetAllJobs()
  return (
    <div>
        <NavbarOne/>
        <Herosection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}
