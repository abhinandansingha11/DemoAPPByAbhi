import {ScreenWidth} from '@freakycoder/react-native-helpers';
import {ExtendedTheme} from '@react-navigation/native';
import {ViewStyle, StyleSheet, Dimensions} from 'react-native';

interface Style {
  container: ViewStyle;
  viewContainer: ViewStyle;
  tinyLogo: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const {colors} = theme;
  return StyleSheet.create<Style>({
    container: {
      padding: 16,
      marginTop: 16,
      borderWidth: 1,
      borderRadius: 8,
      width: Dimensions.get('window').width - 20,
      borderColor: '#888',
      backgroundColor: colors.dynamicBackground,
    },
    viewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
  });
};
