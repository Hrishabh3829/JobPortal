import { setSingleCompany } from '@/components/redux/companySlice'

import { COMPANY_API_END_POINT } from '@/utils/constant.js'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetCompanyById = (companyId) => {
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchSingleCompany = async ()=>{
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleCompany(res.data.company))

                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleCompany();
    },[companyId,dispatch])

}
