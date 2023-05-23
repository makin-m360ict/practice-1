import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    team: []
}
const teamSlice = createSlice({
    name: "makeTeam",
    initialState,
    reducers: {
        addToTeam: (state: any, action: any) => {
            
            const isExist = state.team.find((member: any) => member.id === action.payload.id)
            if (!isExist?.id) {
                state.team.push(action.payload)
            }
        },
        removeFromTeam: (state: any, action: any) => {
            console.log(action.payload, 'payload')
        }
    }
})











export const { addToTeam, removeFromTeam } = teamSlice.actions
export default teamSlice.reducer