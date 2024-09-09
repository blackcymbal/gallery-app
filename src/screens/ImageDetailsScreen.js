import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../assets/themes/theme';
import AppBar from '../components/AppBar';

const ImageDetailsScreen = () => {
 

  return (
    <View style={styles.container}>
      <AppBar title={'Image Details'} />
    </View>
  );
};

export default ImageDetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.mintCream},
});
