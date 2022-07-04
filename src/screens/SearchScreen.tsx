import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import I18n from '../shared/localization/index';

import ParentContainer from '../components/ParentContainer';

export const SearchScreen = (props: any) => {
  const userData = useSelector((state: any) => state.user.user);

  console.log('USER DATA == ', userData);

  return (
    <ParentContainer {...props}>
      <View style={styles.body}>
        <Text>{I18n.t('Search')}</Text>
      </View>
    </ParentContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
});
