

import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '../redux/jobSlice'


const filterData = [
    {
        filterType: "Location",
        array: ["Gurgaon", "Pune", "Hyderabad", "Bangalore", "Mumbai"],

    },
    {
        filterType: "Industry",
        array: ["Full Stack Developer", "Cloud Engineer", "AI/ML Specialist", "Frontend Developer", "Graphic Designer"],

    },
    {
        filterType: "Salary",
        array: ["0-40k", "40-60k", "60-2L"],

    }
]

export const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const dispatch = useDispatch()

    const changeHandler = (value) => {
        setSelectedValue(value)
    }

    useEffect(() => {
        // console.log(selectedValue)
        dispatch(setSearchedQuery(selectedValue))
    }, [selectedValue])

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='text-xl'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    filterData.map((data, index) => (
                        <div>
                            <h1 className='my-2 font-mono text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index} - ${idx}`
                                    return (
                                        <div className='flex my-1'>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
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
