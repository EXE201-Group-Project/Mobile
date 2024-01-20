import { createSlice, createAction } from '@reduxjs/toolkit';

export const updatePolyline = createAction('updatePolyline');

const placeSlice = createSlice({
  name: 'place',
  initialState: {
    msg: '',
    error: '',
    loading: false,
    places: [],
    polyline: [
      { latitude: 37.8025259, longitude: -122.4351431 },
      { latitude: 37.7896386, longitude: -122.421646 },
      { latitude: 37.7665248, longitude: -122.4161628 },
      { latitude: 37.7734153, longitude: -122.4577787 },
      { latitude: 37.7948605, longitude: -122.4596065 },
      { latitude: 37.8025259, longitude: -122.4351431 }
    ]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updatePolyline, (state, action) => {
      const { polyline } = action.payload;
      console.log('Polyline here ', polyline);
      if (polyline) {
        state.polyline = polyline;
      }
    });
  }
});

// export const { } =
//   placeSlice.actions;
export default placeSlice.reducer;
