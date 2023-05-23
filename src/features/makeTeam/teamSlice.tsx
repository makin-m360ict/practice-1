import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    team: []
}
const teamSlice = createSlice({
    name: "makeTeam",
    initialState,
    reducers: {
        addToTeam: (state: any, action: any) => {
            console.log(action.payload,'payload')
            const isExist = state.team.find((member: any) => member.id === action.payload.id)
            if (!isExist?.id) {
                state.team.push(action.payload)
            }
        }
    }
})
export const { addToTeam } = teamSlice.actions
export default teamSlice.reducer