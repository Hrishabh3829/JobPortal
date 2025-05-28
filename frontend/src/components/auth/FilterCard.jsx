

import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'


const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Pune", "Hyderabad", "Banglore", "Mumbai"],

    },
    {
        filterType: "Industry",
        array: ["Meta", "Google", "Uber", "Infosys", "JPMC"],

    },
    {
        filterType: "Salary",
        array: ["0-40k", "40-60k", "60-2L"],

    }
]

export const FilterCard = () => {
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='text-xl'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    filterData.map((data, index) => (
                        <div>
                            <h1 className='my-2 font-mono text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, index) => {
                                    return (
                                        <div className='flex my-1'>
                                            <RadioGroupItem value={item} />
                                            <Label>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}
