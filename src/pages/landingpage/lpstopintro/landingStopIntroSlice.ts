import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingLanding } from '../../preloader/loadingSliceLanding'
import { LandingStopIntroInitState, LandingStopIntroProps } from '../LandingPageProps'

const initialState: LandingStopIntroInitState = {
  info: [],
  error: ''
}

export const fetchLandingStopIntro = createAsyncThunk('landingStopIntro/fetchLandingStopIntro', async (_, { dispatch }) => {
  dispatch(setLoadingLanding(true));
  try {
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/kopiistopintro');
    return response.data.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoadingLanding(false));
  }
})


const landingAboutDataSlice = createSlice({
  name: 'landingStopIntro',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLandingStopIntro.fulfilled, (state, action: PayloadAction<LandingStopIntroProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchLandingStopIntro.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'  // to fix string | undefined error
    })
  }
})

export default landingAboutDataSlice.reducer
