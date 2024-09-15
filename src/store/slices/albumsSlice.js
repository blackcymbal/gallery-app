import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albumsList: [],
};

export const albumsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createAlbums: (state, action) => {
      state.albumsList = action.payload;
    },
    deleteAnAlbum: (state, action) => {
      state.albumsList = action.payload;
    },
  },
});


export const { createAlbums, deleteAnAlbum } = albumsSlice.actions;

export const allAlbums = (state) => state.albums.albumsList;


export default albumsSlice.reducer;
