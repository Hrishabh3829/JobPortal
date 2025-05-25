import React from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Label } from '@radix-ui/react-label'
import { Input } from '@headlessui/react'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'




export const Signup = () => {
  return (
    <div>
      <NavbarOne />
      <div className='flex items-center justify-center mx-auto'>
        <form action="" className="border border-sky-500 rounded-md p-4 my-10 w-auto">
          <h1 className="font-bold text-xl mb-5">SignUp!!</h1>

          <div className="flex flex-col space-y-4">

            <div className="flex flex-col space-y-2">
              <Label>Full Name</Label>
              <Input
                type="text"
                placeholder="Hero name 🦸"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Gmail</Label>
              <Input
                type="text"
                placeholder="Zap mail ⚡"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2 ">
              <Label>Phone Number</Label>
              <Input
                type="text"
                placeholder="Digits only ☎️"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Code word 🕵️"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className='flex items-center justify-between mt-4 gap-x-6'>
            <RadioGroup className=" flex items-center gap-4 my-5" defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" className="cursor-pointer" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="recruiter" className="cursor-pointer" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className='flex items-center space-x-2 '>
              <Label className='space-x-2'>Profile</Label>
              <Input accept='image/*' type='file' className='
                cursor-pointer 
                border border-gray-300 rounded-md px-2 py-1 text-sm 
                file:mr-2 file:py-1 file:px-3 file:border-0 file:rounded-md 
                file:bg-sky-500 file:text-white hover:file:bg-sky-600 transition' />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>
          <span className='text-sm'>Already have an account?
            <Link to="/login" className='text-sky-500'>
              Login
            </Link>
          </span>
        </form>

      </div>
    </div>
  )
}
