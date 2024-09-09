import React, { Suspense } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";


const screenWidth = Dimensions.get('window').width;

const imageWidth = (screenWidth / 3) - 16; 

const LazyImage = React.lazy(() => import("./LazyImage"));

export default function ImageList({ images }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <LazyImage thumbnailUrl={item?.thumbnailUrl} />
      </Suspense>
    </View>
  );

  return (
    <FlatList
    style={{width: '100%'}}
     contentContainerStyle={{alignItems: 'center', gap: 8}}
      numColumns={3} 
      data={images}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      initialNumToRender={10} // Render 10 items initially
      maxToRenderPerBatch={10} // Render 10 more items per scroll
      windowSize={21} // How many items to render outside of the visible window
      removeClippedSubviews={true} // Remove items that are off-screen for memory optimization
      getItemLayout={(data, index) => ({
        length: imageWidth, // Approximate height of each item (image + text)
        offset: (imageWidth + 8) * index, // Offset to calculate position of each item
        index,
      })}
    />
  );
}

const styles = StyleSheet.create({});
