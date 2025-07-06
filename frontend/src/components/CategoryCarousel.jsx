import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from './redux/jobSlice'


const category = [
    "Full Stack Developer",
    "AI/ML Specialist",
    "Graphic Designer",
    "Data Analyst",
    "Cloud Engineer",
    "Frontend Developer",
    "Machine Learning",


]





export const CategoryCarousel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query))
        navigate("/browse")
    }

    return (
        <div className='-mt-8'>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent >
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/3">
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className='rounded-full'>{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />

            </Carousel>
        </div>
    )
}
