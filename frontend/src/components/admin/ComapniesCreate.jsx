import React, { useState } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '../redux/companySlice'

export const ComapniesCreate = () => {
    const navigate = useNavigate()
    const [companyName, setCompanyName] = useState()
    const dispatch = useDispatch()

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message)
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`)
            }

        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div>
            <NavbarOne />
            <div className='max-w-4xl  mx-auto '>
                <div className='my-10'>

                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>Enter your organization's name. You can update this information later if needed.</p>
                </div>
                <Label>Company Name</Label>
                <Input type="text" className="my-2" placeholder="Google,Microsoft,etc" onChange={(e) => setCompanyName(e.target.value)} />
                <div className='flex items-center gap-2 my-10'>
                    <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
                    <Button onClick={registerNewCompany} variant="outline">Continue</Button>

                </div>
            </div>

        </div>
    )
}
