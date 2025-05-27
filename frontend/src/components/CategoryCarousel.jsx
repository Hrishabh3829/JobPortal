import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'


const category = [
    "Frontend Developer",
    "Backend Developer",
    "Graphic Designer",
    "Data Analyst",
    "Cloud Developer",
    "FullStack Developer",
    "Machine Learning",


]

export const CategoryCarousel = () => {
    return (
        <div className='-mt-5'>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent >
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/3">
                                <Button variant="outline" className='rounded-full'>{cat}</Button>
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
