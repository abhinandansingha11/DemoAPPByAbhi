import I18n from '../shared/localization/index';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ParentContainer from '../components/ParentContainer';

export const NotificationScreen = (props: any) => {
  return (
    <ParentContainer {...props}>
      <View style={styles.body}>
        <Text>{I18n.t('Notification')}</Text>
      </View>
    </ParentContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
