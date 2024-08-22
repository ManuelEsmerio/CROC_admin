import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light'
}


export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    switchMode: (state, action) => {
            state.mode = action.payload
        }
  }
})

export const { switchMode } = themeSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTheme = state => state.counter.value

export default themeSlice.reducer