import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../assets/themes/theme';

const AppBar = ({title}) => {
  const navigation = useNavigation();


  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <LinearGradient colors={[theme.colors.secondary, theme.colors.primary]}>
      <SafeAreaView style={styles.container}>
        <View style={styles.insideContainer}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather
              name="chevron-left"
              size={30}
              color={theme.colors.mintCream}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <View style={{width: 30}} />
       
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.primary,
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
    paddingTop: Platform.OS == 'ios' ? 0 : 10,
  },
  title: {fontSize: 20, fontWeight: '500', color: theme.colors.mintCream},
  image: {height: 30, width: 30, borderRadius: 30},
});
