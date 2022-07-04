// MY BAG BOTTOM TAB
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchTodoRequest} from '../redux/actions/List';

import ParentContainer from '../components/ParentContainer';

import {HORIZONTAL_DIMENS} from '../constants/dimens';
import CardItem from './components/card-item/CardItem';
import I18n from '../shared/localization/index';

export const ProfileScreen = (props: any) => {
  const pending = useSelector((state: any) => state.user.pending);
  const todos = useSelector((state: any) => state.user.todos);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <ParentContainer {...props}>
      <View style={styles.body}>
        <Text>{I18n.t('welcome_Abhi')}</Text>
      </View>

      {pending && <ActivityIndicator size={'small'} />}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <FlatList
          data={todos.data}
          renderItem={({item}) => <CardItem data={item} />}
        />
      </View>
    </ParentContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    // flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    margin: HORIZONTAL_DIMENS._20,
    alignContent: 'center',
    // backgroundColor: 'yellow'
  },

  listItem: {
    width: '100%',
    padding: HORIZONTAL_DIMENS._15,
    backgroundColor: 'grey',
  },
});
