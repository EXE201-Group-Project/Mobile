import { createSlice, createAction } from '@reduxjs/toolkit';

//Local action
export const updatePolyline = createAction('updatePolyline');
export const addPlace = createAction('addPlace');

//API Thunk

//Init data type
const initPlacesState = {
  index: 0,
  name: '',
  formatted: '',
  location: {
    latlng: {
      latitude: 0,
      longitude: 0
    }
  }
};

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
  reducers: {
    clearPlaces: (state, action) => {
      state.places = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updatePolyline, (state, action) => {
      const { polyline } = action.payload;
      if (polyline) {
        state.polyline = polyline;
      }
    });
    builder.addCase(addPlace, (state, action) => {
      const { place } = action.payload;
      console.log('This is place gonna be added');
      console.log(place);
      if (place) {
        state.places = [...state.places, place];
      }
    });
  }
});

export const { clearPlaces } = placeSlice.actions;
export default placeSlice.reducer;
