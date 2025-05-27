import React, { useState } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Label } from '@radix-ui/react-label'
import { Input } from '@headlessui/react'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../redux/authSlice'
import { Loader2 } from 'lucide-react'




export const Signup = () => {

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })

  const navigate = useNavigate()

  const {loading} = useSelector(store=>store.auth)
  const dispatch=useDispatch()

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] })
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("password", input.password)
    formData.append("role", input.role)
    if (input.file) {
      formData.append("file", input.file)
    }
    try {
      dispatch(setLoading(true))

      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }finally{
      dispatch(setLoading(false))
    }
  }

  return (
    <div>
      <NavbarOne />
      <div className='flex items-center justify-center mx-auto -mt-4 '>
        <form onSubmit={submitHandler} className=" rounded-md  my-10 w-140 px-4 py-1 border border-sky-500">
          <h1 className="font-bold text-xl mb-5">SignUp!!</h1>

          <div className="flex flex-col space-y-4">

            <div className="flex flex-col space-y-2">
              <Label>Full Name</Label>
              <Input
                type="text"
                value={input.fullname}
                name="fullname"
                onChange={changeEventHandler}
                placeholder="Hero name 🦸"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Gmail</Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                autoComplete="username"
                onChange={changeEventHandler}
                placeholder="Zap mail ⚡"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2 ">
              <Label>Phone Number</Label>
              <Input
                type="text"
                value={input.phoneNumber}
                name="phoneNumber"
                autoComplete="username"
                onChange={changeEventHandler}
                placeholder="Digits only ☎️"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                autoComplete="current-password"
                onChange={changeEventHandler}
                placeholder="Code word 🕵️"
                className="hover:bg-sky-100 hover:text-sky-800 transition-colors placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className='flex items-center justify-between mt-4 gap-x-6'>
            <RadioGroup className=" flex items-center gap-4 my-5" defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" className="cursor-pointer"
                  checked={input.role === 'student'} onChange={changeEventHandler} />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="recruiter" className="cursor-pointer"
                  checked={input.role === 'recruiter'} onChange={changeEventHandler} />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className='flex items-center space-x-2 '>
              <Label className='space-x-2'>Profile</Label>
              <Input accept='image/*' type='file'
                onChange={changeFileHandler}
                className='
                cursor-pointer 
                border border-gray-300 rounded-md px-2 py-1 text-sm 
                file:mr-2 file:py-1 file:px-3 file:border-0 file:rounded-md 
                file:bg-sky-500 file:text-white hover:file:bg-sky-600 transition' />
            </div>
          </div>
         {
            loading ? <Button className='w-full my-4'>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait
            </Button> : <Button type="submit" className="w-full my-4">
              Signup
            </Button>
          }
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
