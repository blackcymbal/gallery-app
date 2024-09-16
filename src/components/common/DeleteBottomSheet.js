import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../assets/themes/theme";
import {
  deleteAnAlbum,
  modifyAlbums,
  photoToDelete,
} from "../../store/slices/albumsSlice";
import {
  imagesApiSlice,
  useFetchImagesQuery,
} from "../../store/slices/imagesApiSlice";

export default function DeleteBottomSheet({ bottomSheetRef, isImage = false }) {
  const selectedPhotoToDelete = useSelector(photoToDelete);
  const { data: images } = useFetchImagesQuery();

  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();

  const handleSheetChanges = useCallback((index) => {}, []);

  const snapPoints = ["30%"];

  // Render backdrop component
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.3}
      />
    ),
    []
  );

  const handleDelete = () => {
    if (isImage) {
      const selectedImage = images.find(
        (item) => item.id === selectedPhotoToDelete
      );

      dispatch(
        imagesApiSlice.util.updateQueryData(
          "fetchImages",
          undefined,
          (draft) => {
            const index = draft.findIndex(
              (photo) => photo.id === selectedPhotoToDelete
            );
            if (index !== -1) {
              draft.splice(index, 1); // Remove the photo from the cache
            }
          }
        )
      );
      dispatch(modifyAlbums(selectedImage?.albumId));

      if (route.name === "ImageDetails") {
        navigation.goBack();
      }
    } else {
      dispatch(deleteAnAlbum());
    }
    bottomSheetRef.current?.close();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text
            style={{
              color: theme.colors.error,
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Delete {isImage ? "photo" : "album"}
          </Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
  },
});
