import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {NotificationScreen} from '../screens/NotificationScreen';
import {ProfileScreen} from '../screens/ProfileScreen';

import Colors from '../constants/colors';
import {FONT_SIZE} from '../constants/fonts';

const Tab = createBottomTabNavigator();

const index: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: Colors.btm_tab_bar_bg},
        }}>
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={FONT_SIZE._24}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={FONT_SIZE._24}
              />
            ),
          }}
          name="SearchScreen"
          component={SearchScreen}
        />

        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'notifications' : 'notifications-outline'}
                size={FONT_SIZE._24}
              />
            ),
          }}
          name="NotificationScreen"
          component={NotificationScreen}
        />

        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={FONT_SIZE._24}
              />
            ),
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;
