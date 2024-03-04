import { createSlice, createAction } from '@reduxjs/toolkit';

//Local action
export const updatePolyline = createAction('updatePolyline');
export const addPlace = createAction('addPlace');

//API Thunk

//Init data type
const initPlacesState = {
  index: 0,
  place_id: '',
  description: '',
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
    polyline: []
  },
  reducers: {
    clearPlaces: (state, action) => {
      state.places = [];
    },
    clearPolylines: (state, action) => {
      state.polyline = [];
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
      // console.log('This is place gonna be added');
      // console.log(place);
      if (place) {
        state.places = [...state.places, place];
      }
    });
  }
});

export const { clearPlaces, clearPolylines } = placeSlice.actions;
export default placeSlice.reducer;
