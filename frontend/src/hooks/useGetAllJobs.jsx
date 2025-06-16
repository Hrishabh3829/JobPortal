import { setAllJobs } from '@/components/redux/jobSlice.js'
import { JOB_API_END_POINT } from '@/utils/constant.js'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetAllJobs = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchAllJobs = async ()=>{
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs))

                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchAllJobs();
    },[])

}
