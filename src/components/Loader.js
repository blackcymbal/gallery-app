import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = ({size = 'large', color = '#000000'}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
