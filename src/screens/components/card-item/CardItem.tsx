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
import {ICardItem} from '../../model/index';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: ICardItem;
}

const CardItem: React.FC<ICardItemProps> = ({style, data}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const {first_name, last_name, avatar} = data;

  // eslint-disable-next-line react/no-unstable-nested-components
  const Header = () => (
    <>
      <View style={styles.viewContainer}>
        <Image style={styles.tinyLogo} source={{uri: avatar}} />
        <Text>
          {first_name} {last_name}
        </Text>
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
