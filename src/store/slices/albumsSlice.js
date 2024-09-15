import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albumsList: [],
  selectedAlbumIdToDelete: null,
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
    selectAnAlbumToDelete: (state, action) => {
      state.selectedAlbumIdToDelete = action.payload;
    },
    deleteAnAlbum: (state) => {
      state.albumsList = state.albumsList.filter(
        (item) => item.albumId !== state.selectedAlbumIdToDelete
      );
    },
  },
});

export const { createAlbums, deleteAnAlbum, selectAnAlbumToDelete } =
  albumsSlice.actions;

export const allAlbums = (state) => state.albums.albumsList;

export const albumToDelete = (state) => state.albums.selectedAlbumIdToDelete;

export default albumsSlice.reducer;
