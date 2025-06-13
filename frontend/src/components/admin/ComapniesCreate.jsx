import React from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export const ComapniesCreate = () => {
    const navigate=useNavigate()
    const registerNewCompany=async()=>{
        try {
            
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <div>
            <NavbarOne />
            <div className='max-w-4xl  mx-auto '>
                <div className='my-10'>

                <h1 className='font-bold text-2xl'>your company name</h1>
                <p className='text-gray-500'>What you would like to give the company name . you can chnage this later</p>
                </div>
                <Label>Company Name</Label>
                <Input type="text" className="my-2" placeholder="Google,Microsoft,etc" />
                <div className='flex items-center gap-2 my-10'>
                    <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
                    <Button variant="outline">Continue</Button>

                </div>
            </div>

        </div>
    )
}
