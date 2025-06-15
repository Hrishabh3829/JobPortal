import React from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CompaniesTable } from './CompaniesTable'
import { useNavigate } from 'react-router-dom'

export const Companies = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavbarOne />
            <div className=' max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5'>
                    <Input
                        className="w-fit" placeholder="Filter by name"
                    />
                    <Button onClick={() => navigate("/admin/companies/create")}>
                        New Company
                    </Button>
                </div>
                <div>
                    <CompaniesTable />
                </div>

            </div>
        </div>
    )
}
