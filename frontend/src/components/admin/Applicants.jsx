import React, { useEffect } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { ApplicantsTable } from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '../redux/applicationSlice'

export const Applicants = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {applicants} = useSelector(store=>store.application)

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true })
                dispatch(setAllApplicants(res.data.job))
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllApplicants()
    }, [])
    return (
        <div>
            <NavbarOne />
            <div className='max-w-5xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Applicants ({applicants?.applications?.length})</h1>
                <ApplicantsTable />

            </div>
        </div>
    )
}
