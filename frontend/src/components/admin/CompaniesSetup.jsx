import React, { useState } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

export const CompaniesSetup = () => {
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    })
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandler=(e)=>{
        setInput({})
    }


    return (
        <div>
            <NavbarOne />
            <div className='max-w-xl mx-auto my-10'>
                <form action="">
                    <div className='flex items-center gap-5 p-8'>

                        <Button className="flex items-center gap-2 text-gray-600 font-semibold" variant="outline">
                            <ArrowLeft />
                            <span>Back</span>
                        </Button>
                        <h1 className='font-bold text-xl'>Company Setup</h1>

                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        
                        <div>

                            <Label className="my-1">Company Name</Label>
                            <Input
                                type="text" name="name" value={input.name} onChange={changeEventHandler}
                            />
                        </div>
                        <div>

                            <Label className="my-1">Description</Label>
                            <Input
                                type="text" name="description" value={input.description} onChange={changeEventHandler}
                            />
                        </div>
                        <div>

                            <Label className="my-1">Website</Label>
                            <Input
                                type="text" name="website" value={input.website} onChange={changeEventHandler}
                            />
                        </div>
                        <div>

                            <Label className="my-1">Location</Label>
                            <Input
                                type="text" name="location" value={input.location} onChange={changeEventHandler}
                            />
                        </div>
                        <div>

                            <Label className="my-1">Logo</Label>
                            <Input
                                type="file" accept= "image/*" onChange={changeFileHandler}
                            />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
