import React, {useMemo} from 'react';
import {
  StyleProp,
  View,
  ViewStyle,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import createStyles from './CardItem.style';
import {ICardItem} from '../../../services/models';

const profileURI =
  // eslint-disable-next-line max-len
  'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: ICardItem;
}

const CardItem: React.FC<ICardItemProps> = ({style, data}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const {name, description} = data;

  // eslint-disable-next-line react/no-unstable-nested-components
  const Header = () => (
    <>
      <View style={styles.viewContainer}>
        <Image style={styles.tinyLogo} source={{uri: profileURI}} />
        <Text>{description}</Text>
      </View>
    </>
  );

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Header />
    </TouchableOpacity>
  );
};

export default CardItem;
