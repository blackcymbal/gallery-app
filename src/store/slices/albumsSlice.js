import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albumsList: [],
  selectedAlbumIdToDelete: null,
  selectedPhotoIdToDelete: null,
};

export const albumsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createAlbums: (state, action) => {
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
    selectAnPhotoToDelete: (state, action) => {
      state.selectedPhotoIdToDelete = action.payload;
    },
    modifyAlbums: (state, action) => {
      const selectedAlbum = state.albumsList.find(
        (item) => item.albumId === action.payload
      );
      if (selectedAlbum && selectedAlbum?.totalImages > 1) {
        selectedAlbum.totalImages -= 1;
      }
    },
  },
});

export const {
  createAlbums,
  deleteAnAlbum,
  selectAnAlbumToDelete,
  selectAnPhotoToDelete,
  modifyAlbums,
} = albumsSlice.actions;

export const allAlbums = (state) => state.albums.albumsList;
export const albumToDelete = (state) => state.albums.selectedAlbumIdToDelete;
export const photoToDelete = (state) => state.albums.selectedPhotoIdToDelete;

export default albumsSlice.reducer;
