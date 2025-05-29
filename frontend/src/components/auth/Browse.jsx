import React from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Job } from './Job';


const randomJobs = [1, 2,64,3];

export const Browse = () => {
    return (
        <div>
            <NavbarOne />
            <div className='max-w-7xl  my-10 mx-10'>
                <h1 className='my-3 font-bold text-xl'>Search Results ({randomJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>

                    {
                        randomJobs.map((item, index) => {
                            return (
                                <Job />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
