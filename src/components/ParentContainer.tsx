import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const ParentContainer: React.FC = (props: any) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default ParentContainer;
