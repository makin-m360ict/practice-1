import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { postsApi, userApi } from "../features/api/apiSlice"
import teamSlice from "../features/makeTeam/teamSlice"

export const store = configureStore({
  reducer: {
   [userApi.reducerPath]:userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
   team: teamSlice
   
  },
  
  middleware: (getDefaultMiddleware:any) =>
   getDefaultMiddleware().concat([userApi.middleware,postsApi.middleware])
})

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >
