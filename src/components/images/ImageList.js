import { useNavigation } from "@react-navigation/native";
import React, { Suspense } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

const imageWidth = screenWidth / 3 - 16;

const LazyImage = React.lazy(() => import("./LazyImage"));

export default function ImageList({ images }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <LazyImage image={item} navigation={navigation} />
      </Suspense>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 8 }}
        numColumns={3}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={21}
        maxToRenderPerBatch={21}
        windowSize={21}
        //  removeClippedSubviews={true}
        getItemLayout={(data, index) => ({
          length: imageWidth,
          offset: (imageWidth + 8) * index,
          index,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 12, marginTop: 16 },
});
