import { createSlice } from "@reduxjs/toolkit"
const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: []
    },
    reducers: {
        //actions
        setAllJobs: (state, action) => {
            state.allJobs = action.payload
        }
    }
})

export const { setAllJobs } = jobSlice.actions;
export default jobSlice.reducer
