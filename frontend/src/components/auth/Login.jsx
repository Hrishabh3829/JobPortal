import React, { useState } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Label } from '@radix-ui/react-label'
import { Input } from '@headlessui/react'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'




export const Login = () => {
  const [input, setInput] = useState({
    gmail: "",
    password: "",
    role: ""
  })
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input)
    
  }


  return (
    <div>
      <NavbarOne />
      <div className='flex items-center justify-center mx-auto'>
        <form onSubmit={submitHandler} className="border border-sky-500 rounded-md p-4 my-10 w-140">
          <h1 className="font-bold text-xl mb-5">Login!!</h1>

          <div className="flex flex-col space-y-4">

            <div className="flex flex-col space-y-2">
              <Label>Gmail</Label>
              <Input
                type="text"
                value={input.gmail}
                name="gmail"
                onChange={changeEventHandler}
                placeholder="Zap mail ⚡"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>


            <div className="flex flex-col space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Code word 🕵️"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className='flex items-center justify-between mt-4 gap-x-6'>
            <RadioGroup className=" flex items-center gap-4 my-5" defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" checked={input.role === 'student'}
                  onChange={changeEventHandler} className="cursor-pointer" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="recruiter"
                  checked={input.role === 'recruiter'} onChange={changeEventHandler}
                  className="cursor-pointer" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full my-4">
            Login
          </Button>
          <span className='text-sm'>Don't have an account?
            <Link to="/signup" className='text-sky-500'>
              Signup
            </Link>
          </span>
        </form>

      </div>
    </div>
  )
}
