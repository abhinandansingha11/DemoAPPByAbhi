import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ParentContainer from '../components/ParentContainer';
import {ScreenWidth} from '@freakycoder/react-native-helpers';

import MockData from '../screens/components/card-item/sampleData/SampleData';
import CardItem from '../shared/components/card-item/CardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from '../shared/localization/index';

const profileURI =
  // eslint-disable-next-line max-len
  'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80';

export const HomeScreen = (props: any) => {
  const [user, setUser] = React.useState<any>(MockData);
  React.useEffect(() => {
    _storeData();
  }, []);
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('name', 'Abhinandan Singha');
      _retrieveData();
    } catch (error) {
      // Error saving data
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const List = () => (
    <View style={styles.listContainer}>
      <FlatList data={user} renderItem={({item}) => <CardItem data={item} />} />
    </View>
  );

  const Welcome = () => (
    <>
      <View style={styles.imgStyle}>
        <View>
          <Text>{I18n.t('welcome_Abhi')}</Text>
          <View>
            <Text>{I18n.t('welcome_back')}</Text>
          </View>
        </View>
        <View style={{position: 'absolute', right: 0}}>
          <Image style={styles.tinyLogo} source={{uri: profileURI}} />
        </View>
      </View>
    </>
  );

  const Content = () => (
    <View style={styles.contentContainer}>
      <Welcome />
      <List />
    </View>
  );

  return (
    <ParentContainer {...props}>
      <View style={styles.body}>
        <Content />
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 45,
    width: ScreenWidth * 0.9,
    marginTop: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    fontWeight: '700',
  },
  header: {
    width: ScreenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    marginTop: 16,
  },
  listContainer: {
    marginTop: 8,
  },
  profilePicImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  imgStyle: {
    flexDirection: 'row',
  },
});
