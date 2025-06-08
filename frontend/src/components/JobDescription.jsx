import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export const JobDescription = () => {
    const isApplied = true
    return (

        <div className='max-w-5xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='my-2'>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>12 Positions</Badge>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>Part time</Badge>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>24 LPA</Badge>
                    </div>
                </div>
                <Button disabled={isApplied}
                    className={`
                                rounded-lg px-4 py-2 text-white font-medium transition-colors duration-200
                                        ${isApplied
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-blue-400 hover:bg-blue-500 active:bg-blue-600 shadow-sm'
                        }
                    `}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-semibold p-4 '>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-2 '>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-2 '>Location: <span className='pl-4 font-normal text-gray-800'>Hyderabad</span></h1>
                <h1 className='font-bold my-2 '>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea rem perspiciatis impedit incidunt. Ex vitae at enim quo ullam! Magni ratione tenetur vel ea iste, consequuntur optio magnam earum?</span></h1>
                <h1 className='font-bold my-2 '>Experience: <span className='pl-4 font-normal text-gray-800'>3 years</span></h1>
                <h1 className='font-bold my-2 '>Salary: <span className='pl-4 font-normal text-gray-800'>10LPA</span></h1>
                <h1 className='font-bold my-2 '>Total Applicants: <span className='pl-4 font-normal text-gray-800'>400</span></h1>
                <h1 className='font-bold my-2 '>Posted Date: <span className='pl-4 font-normal text-gray-800'>08-06-2025</span></h1>
            </div>
        </div>
    )
}
