import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../assets/themes/theme";

export default function DeleteBottomSheet({ bottomSheetRef, isImage = false }) {
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const snapPoints = ["30%"];

  // Render backdrop component
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.6}
      />
    ),
    []
  );

  return (
  
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <TouchableOpacity
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#fff',
              borderRadius: 8,
            }}
          >
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
});
